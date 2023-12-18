import { React } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

import { COLORS, SIZES, images } from "../constants";

function Footer() {
  return (
    <View style={styles.footer}>
      <Image source={images.HardworkLogo} style={styles.footerLogo} />
      <View style={styles.footerTextDiv}>
        <Text style={styles.footerText}>
          © Copyright 2023 HWM{"\n"}
          <Link href="/home" style={styles.link}>
            Políticas de privacidade
          </Link>{" "}
          •{" "}
          <Link href="/home" style={styles.link}>
            Termos de uso
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  link: {
    textDecorationLine: "underline",
  },
});

export default Footer;
