import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { COLORS, FONT } from "../../constants";
import SelectionBox from "./selectionBox";

function SelectSearch({ placeholder, content }) {
  const formattedContent = content.slice(0, 4).join(", ") + "...";

  const [searchInput, setSearchInput] = React.useState("");
  const filteredContent = content.filter((item) =>
    item.toLowerCase().includes(searchInput.toLowerCase())
  );

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const ref = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const handleLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setCoords({ x, y, width, height });
  };

  const styles = getStyles(coords);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={handlePress}
        ref={ref}
        onLayout={handleLayout}
      >
        <TextInput
          style={styles.input}
          onChangeText={setSearchInput}
          value={searchInput}
          placeholder={placeholder}
          placeholderTextColor={COLORS.black}
          onFocus={() => setIsPressed(true)}
        />
        <Text style={styles.examples}>{formattedContent}</Text>
      </TouchableOpacity>
      {isPressed && (
        <View style={styles.dropdown}>
          <SelectionBox text="TODOS" />
          <View style={styles.break} />
          {filteredContent.map((item) => (
            <SelectionBox key={item} text={item} />
          ))}
        </View>
      )}
    </>
  );
}

function getStyles(coords) {
  return StyleSheet.create({
    container: {
      backgroundColor: COLORS.white,
      borderRadius: 8,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: COLORS.darkGray,
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
    input: {
      fontFamily: FONT.regular,
      fontSize: 14,
      color: COLORS.black,
    },
    examples: {
      fontFamily: FONT.regular,
      fontSize: 10,
      color: COLORS.darkGray,
      lineHeight: 12,
    },
    dropdown: {
      position: "absolute",
      backgroundColor: COLORS.white,
      borderRadius: 6,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: COLORS.darkGray,
      bottom: coords.y + coords.height / 2,
      left: coords.x,
      width: coords.width,
      padding: 8,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    break: {
      width: "100%",
      height: 0,
    },
  });
}

export default SelectSearch;
