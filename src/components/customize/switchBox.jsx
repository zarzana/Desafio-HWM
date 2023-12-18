import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SwitchCustom from "expo-custom-switch";
import { LogBox } from "react-native";

import { COLORS, FONT } from "../../constants";

function SwitchBox({ title, initialState }) {
  const [isEnabled, setIsEnabled] = useState(initialState);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const iconParameters = {
    name: "circle",
    color: "white",
    style: {
      height: 22,
      width: 22,
      transform: [{ scaleX: 2 }, { scaleY: 2 }],
    },
  };

  // temporary: ignoring warning about useNativeDriver due to issue with expo-custom-switch
  // todo: recreate component from scratch
  LogBox.ignoreLogs(["Animated: `useNativeDriver` was not specified."]);
  const _consoleWarn = console.warn;
  console.warn = (message, ...args) => {
    if (message.indexOf("Animated: `useNativeDriver` was not specified.") <= -1) {
      _consoleWarn(message, ...args);
    }
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>{title}</Text>
      <SwitchCustom
        leftColor={COLORS.darkGray}
        rightColor={COLORS.green}
        onChange={toggleSwitch}
        thumbColor={COLORS.purple}
        value={isEnabled}
        style={styles.switch}
        iconLeft={iconParameters}
        iconRight={iconParameters}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: COLORS.gray,
    borderRadius: 8,
    marginTop: 4,
    borderStyle: "solid",
    borderWidth: 1.8,
    borderColor: COLORS.black,
    height: 42,
    alignItems: "center",
    paddingLeft: 14,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 18,
  },
  switch: {
    marginLeft: "auto",
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: COLORS.black,
    borderRadius: 200,
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
});

export default SwitchBox;
