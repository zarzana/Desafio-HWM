import { React } from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLORS, FONT, icons } from "../constants";

function Menu({ title }) {
  return (
    <View style={styles.menu}>
      <Link href="/home" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Image source={icons.ChrevronBack} style={styles.icon} />
          <Text style={styles.backButoonText}>Voltar</Text>
        </TouchableOpacity>
      </Link>
      <View>
        <Text style={styles.menuTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.black,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  backButton: {
    height: 28,
    width: 100,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    height: 20,
    width: 20,
    top: 4,
    left: 2,
  },
  backButoonText: {
    height: 30,
    fontFamily: FONT.regular,
    fontSize: 12,
    lineHeight: 28,
  },
  menuTitle: {
    fontFamily: FONT.bold,
    fontSize: 22,
    color: COLORS.white,
  },
});

export default Menu;
