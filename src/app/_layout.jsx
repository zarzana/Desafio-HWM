import React, { useEffect, useRef, useCallback, useState } from "react";
import { StatusBar, View, SafeAreaView, StyleSheet, Platform, ScrollView } from "react-native";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";

import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";

import { Footer, Header } from "../components";
import { COLORS } from "../constants";
import ScrollContext from "../context/ScrollContext";
import QuestionContext from "../context/QuestionContext";

function Layout() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scrollEnable, setScrollEnable] = useState(true);
  const contextValue = React.useMemo(
    () => ({ currentQuestion, setCurrentQuestion }),
    [currentQuestion, setCurrentQuestion]
  );

  const scrollRef = useRef();
  const scrollToTop = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": PoppinsRegular,
    "Poppins-Medium": PoppinsMedium,
    "Poppins-Bold": PoppinsBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QuestionContext.Provider value={contextValue}>
      <View style={styles.mainView}>
        <Header />

        <SafeAreaView style={styles.safeAreaView}>
          <ScrollContext.Provider value={{ scrollToTop, setScrollEnable }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              ref={scrollRef}
              scrollEnabled={scrollEnable}
            >
              <Slot initialRouteName="home" />
            </ScrollView>
          </ScrollContext.Provider>
        </SafeAreaView>
        <Footer />
      </View>
    </QuestionContext.Provider>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: 12,
  },
  mainView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: COLORS.black,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: 12,
  },
  view: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 2,
    paddingHorizontal: 16,
  },
});

export default Layout;
