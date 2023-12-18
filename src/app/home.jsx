import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { React, useEffect, useCallback } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";
import PoppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import PoppinsBold from "../assets/fonts/Poppins-Bold.ttf";

import { COLORS, FONT, SIZES, icons, images } from "../constants";
import { HomeButtonBox } from "../components";

function Home() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": PoppinsRegular,
    "Poppins-Medium": PoppinsMedium,
    "Poppins-Bold": PoppinsBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.mainView} onLayout={onLayoutRootView}>
      <SafeAreaView style={styles.safeAreaView}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.black },
            headerShadowVisible: false,
            headerLeft: () => (
              <View style={styles.logotipo}>
                <Text style={styles.logotipoText}>LOGOTIPO</Text>
              </View>
            ),
            headerRight: () => (
              <View style={styles.headerRightView}>
                <View style={styles.homeView}>
                  <View style={styles.homeIconView}>
                    <Image source={icons.HomeIcon} style={styles.homeIcon} />
                  </View>
                  <Text style={styles.homeText}>HOME</Text>
                </View>
                <Image source={images.UserImage} style={styles.userImage} />
              </View>
            ),
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.view}>
            <HomeButtonBox
              title="questões"
              description="Prepare-se de forma personalizada respondendo ao banco de questões!"
              buttonText="Começar"
            />
            <HomeButtonBox title="personalizar" buttonText="Acessar" />
            <HomeButtonBox title="métricas" buttonText="Acessar" />
            <HomeButtonBox
              title="chatbot"
              description="Treine através de trivias geradas pelo nosso chatbot do Telegram."
              buttonText="Começar"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.footer}>
        <Image source={images.HardworkLogo} style={styles.footerLogo} />
        <View style={styles.footerTextDiv}>
          <Text style={styles.footerText}>
            © Copyright 2023 HWM{"\n"}Políticas de privacidade • Termos de uso
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: 12,
  },
  logotipo: {
    display: "flex",
    flexDirection: "row",
    width: 120,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginLeft: Platform.OS === "web" ? 16 : 0,
  },
  logotipoText: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 2,
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
  },
  headerRightView: {
    display: "flex",
    flexDirection: "row",
    width: 130,
    marginRight: Platform.OS === "web" ? 16 : 0,
  },
  homeView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: 60,
  },
  homeIconView: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 2,
    height: 36,
  },
  homeIcon: {
    width: 30,
    height: 30,
  },
  homeText: {
    color: COLORS.white,
    fontFamily: FONT.bold,
    fontSize: SIZES.small,
    textAlignVertical: "center",
    marginTop: 4,
    marginLeft: 6,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginLeft: 30,
    alignSelf: "center",
  },
  view: {
    flex: 1,
    paddingTop: SIZES.large,
    paddingBottom: 2,
    paddingHorizontal: SIZES.large,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    padding: SIZES.small,
    backgroundColor: COLORS.black,
  },
  footerLogo: {
    flex: 0,
    width: 87,
    height: 25,
    opacity: 0.4,
    marginTop: 9,
  },
  footerTextDiv: {
    flex: 1,
    marginTop: 5,
  },
  footerText: {
    flex: 1,
    color: "white",
    opacity: 0.3,
    fontSize: 10,
    textAlign: "right",
    lineHeight: 14,
    marginTop: 1,
  },
});

export default Home;
