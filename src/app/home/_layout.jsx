import React, { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";

import { HomeButtonBox } from "../../components";
import ScrollContext from "../../context/ScrollContext";

import { SIZES } from "../../constants";

function Home() {
  const { scrollToTop, setScrollEnable } = useContext(ScrollContext);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <View style={styles.view}>
      <HomeButtonBox
        title="questões"
        description="Prepare-se de forma personalizada respondendo ao banco de questões!"
        buttonText="Começar"
        buttonLink="/questions"
      />
      <HomeButtonBox title="personalizar" buttonText="Acessar" buttonLink="/customize" />
      <HomeButtonBox title="métricas" buttonText="Acessar" buttonLink="/home" />
      <HomeButtonBox
        title="chatbot"
        description="Treine através de trivias geradas pelo nosso chatbot do Telegram."
        buttonText="Começar"
        buttonLink="/home"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: SIZES.large,
    paddingBottom: 2,
    paddingHorizontal: SIZES.large,
  },
});

export default Home;
