import { React } from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { COLORS, FONT, icons, images } from "../constants";

function Header() {
  return (
    <View style={styles.header}>
      <Link href="/home" asChild>
        <TouchableOpacity style={styles.logotipo}>
          <Text style={styles.logotipoText}>LOGOTIPO</Text>
        </TouchableOpacity>
      </Link>
      <View style={styles.headerRightView}>
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.homeView}>
            <View style={styles.homeIconView}>
              <Image source={icons.HomeIcon} style={styles.homeIcon} />
            </View>
            <Text style={styles.homeText}>HOME</Text>
          </TouchableOpacity>
        </Link>
        <Image source={images.UserImage} style={styles.userImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.black,
    display: "flex",
    flexDirection: "row",
    height: 60,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logotipo: {
    display: "flex",
    flexDirection: "row",
    width: 120,
    height: 30,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  logotipoText: {
    flex: 1,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 2,
    fontFamily: FONT.bold,
    fontSize: 12,
  },
  headerRightView: {
    display: "flex",
    flexDirection: "row",
    width: 130,
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
    fontSize: 12,
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
});

export default Header;
