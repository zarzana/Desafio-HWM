import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, FONT } from "../../constants";

function StandardBox({ text, children }) {
  return (
    <View style={styles.sectionBox}>
      <Text style={styles.title}>{text}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionBox: {
    backgroundColor: COLORS.gray,
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
    shadowColor: "rgba(0, 0, 0, 0.2)", // iOS
    shadowOffset: { width: 3, height: 2 }, // iOS
    shadowRadius: 5, // iOS
    elevation: 10, // Android
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 16,
    color: COLORS.black,
  },
});

export default StandardBox;
