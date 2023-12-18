import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

import { COLORS, SIZES, FONT } from "../../constants";

function HomeButtonBox({ icon, title, description, buttonText, buttonLink }) {
  return (
    <View>
      <LinearGradient
        style={styles.gradient}
        colors={[COLORS.purple, COLORS.pink]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.title}>{title.toUpperCase()}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
        <Link href={buttonLink} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </Link>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
  },
  description: {
    color: COLORS.white,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    lineHeight: 16,
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: COLORS.white,
    borderRadius: 100,
    marginTop: 30,
    paddingTop: 4,
    width: 150,
    alignItems: "center",
    alignSelf: "flex-end",
    shadowColor: "rgba(0, 0, 0, 0.9)", // iOS
    shadowOffset: { width: 3, height: 2 }, // iOS
    shadowRadius: 5, // iOS
    elevation: 10, // Android
  },
  buttonText: {
    color: COLORS.black,
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
  },
});

export default HomeButtonBox;
