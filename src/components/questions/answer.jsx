import { React } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { COLORS, FONT } from "../../constants";

function Answer({ letter, content, selectedAnswer, setSelectedAnswer }) {
  const isSelected = selectedAnswer === letter;

  return (
    <TouchableOpacity
      style={[styles.answerBox, isSelected ? styles.answerBoxSelected : {}]}
      onPress={() => setSelectedAnswer(letter)}
      activeOpacity={1}
    >
      <Text style={[styles.answerLetter, isSelected ? styles.answerLetterSelected : {}]}>
        {letter}
      </Text>
      <Text style={[styles.answer, isSelected ? styles.answerSelected : {}]}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  answerBox: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 24,
    shadowColor: "rgba(0, 0, 0, 0.3)", // iOS
    shadowOffset: { width: 3, height: 2 }, // iOS
    shadowRadius: 10, // iOS
    elevation: 10, // Android
  },
  answerBoxSelected: {
    backgroundColor: COLORS.black,
  },
  answerLetter: {
    width: 24,
    textAlign: "center",
    marginLeft: 4,
    marginRight: 12,
    fontFamily: FONT.bold,
    fontSize: 24,
    color: COLORS.black,
    lineHeight: 32,
  },
  answerLetterSelected: {
    color: COLORS.white,
  },
  answer: {
    flex: 1,
    fontFamily: FONT.regular,
    fontSize: 10,
    color: COLORS.black,
    lineHeight: 14,
  },
  answerSelected: {
    color: COLORS.white,
  },
});

export default Answer;
