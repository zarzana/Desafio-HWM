import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";

import { COLORS, FONT, SIZES } from "../../constants";
import { Menu, Answer, QuestionTracker, StandardBox } from "../../components";
import ScrollContext from "../../context/ScrollContext";
import QuestionContext from "../../context/QuestionContext";

function Customize() {
  return (
    <>
      <Menu title="Personalizar" />

      <StandardBox text="Definir meta diária de questões">
        <Text>potato</Text>
      </StandardBox>
      <StandardBox text="Questões por Grandes áreas">
        <Text>potato</Text>
      </StandardBox>
      <StandardBox text="Questões de provas específicas:">
        <Text>potato</Text>
      </StandardBox>
      <StandardBox text="Questões de temas específicos:">
        <Text>potato</Text>
      </StandardBox>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: FONT.medium,
    fontSize: SIZES.regular,
    color: COLORS.black,
    textAlign: "center",
    paddingVertical: 8,
    lineHeight: 20,
  },
});

export default Customize;
