import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { COLORS, SIZES, FONT } from "../../constants";

function SelectionBox({ text }) {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <TouchableOpacity style={styles.selectionBox} onPress={handlePress} activeOpacity={0.8}>
      <View style={[styles.selectionTick, isSelected && styles.selected]}></View>
      <Text style={styles.selectionText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectionBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gray,
    borderRadius: 6,
    paddingHorizontal: 4,
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLORS.darkGray,
  },
  selectionTick: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.white,
    borderRadius: 6,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    marginRight: 4,
  },
  selectionText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.black,
    marginTop: 2,
  },
  selected: {
    backgroundColor: COLORS.green,
  },
});

export default SelectionBox;
