import { View, StyleSheet, TouchableOpacity, Text, Image, Platform } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

import { COLORS, FONT, SIZES, images } from "../../constants";
import { Menu, SwitchBox, StandardBox, SelectSearch } from "../../components";
import ScrollContext from "../../context/ScrollContext";

function Customize() {
  const { scrollToTop, setScrollEnable } = useContext(ScrollContext);

  useEffect(() => {
    scrollToTop();
  }, []);

  const testArray = [
    "ABC",
    "AMRIGS",
    "ENARE",
    "SUS-SP",
    "UNICAMP",
    "USP",
    "UNIFEST",
    "UFS",
    "UFRJ",
    "SANTA CASA DE SÃO PAULO",
  ];

  const themeArray = [
    "Asma",
    "Tuberculose",
    "Pneumonia",
    "Epidemias",
    "Gestão em saúde",
    "HIV",
    "Abdome agudo obstrutivo",
    "Tumores abdominais na infância",
  ];

  const [sliderValue, setSliderValue] = useState([200]);

  const enableScroll = () => setScrollEnable(true);
  const disableScroll = () => setScrollEnable(false);

  const [width, setWidth] = useState(0);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setWidth(width);
  };

  return (
    <LinearGradient
      style={[styles.view, styles.gradient]}
      colors={[COLORS.purple, COLORS.pink]}
      start={{ x: 1, y: 1 }}
      end={{ x: 1, y: 0 }}
    >
      <Menu title="Personalizar" />

      <StandardBox text="Definir meta diária de questões">
        <View style={styles.sliderContainer} onLayout={handleLayout}>
          <MultiSlider
            values={sliderValue}
            onValuesChange={(value) => setSliderValue(value)}
            max={200}
            sliderLength={width - 90}
            customMarker={() => (
              <Image
                source={images.SliderThumb}
                style={{ transform: [{ scaleX: 0.3 }, { scaleY: 0.3 }], marginTop: 8 }}
              />
            )}
            trackStyle={styles.track}
            selectedStyle={styles.trackSelected}
            onValuesChangeStart={() => disableScroll()}
            onValuesChangeFinish={() => enableScroll()}
          />
          <LinearGradient
            style={styles.sliderTextContainer}
            colors={[COLORS.green, COLORS.darkGreen]}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.sliderText}>{sliderValue}</Text>
          </LinearGradient>
        </View>
      </StandardBox>

      <StandardBox text="Questões por Grandes áreas">
        <SwitchBox title="Clínica médica" initialState={true} />
        <SwitchBox title="Cirurgia geral" initialState={true} />
        <SwitchBox title="Pediatria" initialState={false} />
        <SwitchBox title="Ginecologia e obstetrícia" initialState={true} />
        <SwitchBox title="Medicina preventiva" initialState={false} />
      </StandardBox>

      <StandardBox text="Questões de provas específicas:">
        <SelectSearch placeholder="Busque provas" content={testArray} />
      </StandardBox>

      <StandardBox text="Questões de temas específicos:">
        <SelectSearch placeholder="Busque temas" content={themeArray} />
      </StandardBox>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: 12,
  },
  view: {
    flex: 1,
    paddingTop: SIZES.large,
    paddingBottom: 2,
    paddingHorizontal: SIZES.large,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  track: {
    height: 10,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1.8,
    borderColor: COLORS.black,
  },
  trackSelected: { backgroundColor: COLORS.green },
  sliderTextContainer: {
    width: 60,
    height: 30,
    backgroundColor: COLORS.green,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1.8,
    borderColor: COLORS.black,
  },
  sliderText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.regular,
    color: COLORS.white,
    lineHeight: 20,
  },
  startButton: {
    width: 200,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    marginTop: 20,
    alignSelf: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)", // iOS
    shadowOffset: { width: 3, height: 2 }, // iOS
    shadowRadius: 5, // iOS
    elevation: 10, // Android
    marginBottom: 30,
  },
  startButtonText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.regular,
    color: COLORS.black,
    textAlign: "center",
    paddingVertical: 8,
    lineHeight: 20,
  },
});

export default Customize;
