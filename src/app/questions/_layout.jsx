import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import axios from "axios";

import { COLORS, FONT, SIZES } from "../../constants";
import { Menu, Answer, QuestionTracker } from "../../components";
import ScrollContext from "../../context/ScrollContext";
import QuestionContext from "../../context/QuestionContext";

function Questions() {
  const { currentQuestion, setCurrentQuestion } = useContext(QuestionContext);
  const scrollToTop = useContext(ScrollContext);

  useEffect(() => {
    scrollToTop();
  }, []);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questions, setQuestions] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getRecords = () => {
    const URL = "https://hardworkmedicina.com.br/exemploQuestoes.json";
    const request = axios.get(URL);
    request
      .then((response) => {
        setQuestions(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(getRecords, []);

  function numberToLetter(number) {
    const letters = ["A", "B", "C", "D"];
    return letters[number - 1];
  }

  if (isLoading) {
    return <ActivityIndicator size={100} color="black" />;
  }

  function nextQuestion() {
    if (currentQuestion < questions.obj.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <>
      <Menu title="Questões" />
      <View style={styles.questionBox}>
        <Text style={styles.question}>
          {isLoading ? null : questions.obj[currentQuestion].questao}
        </Text>
      </View>

      {isLoading
        ? null
        : questions.obj[currentQuestion].alternativas.map((answer) => (
            <Answer
              key={answer.id}
              letter={numberToLetter(answer.id)}
              content={answer.alternativa}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
          ))}

      <TouchableOpacity style={styles.confirmButton} onPress={() => nextQuestion()}>
        <Text style={styles.confirmText}>Confirmar resposta</Text>
      </TouchableOpacity>
      <View style={styles.horizontalScroll}>
        <QuestionTracker
          currentQuestion={currentQuestion}
          totalQuestions={Object.keys(questions).length}
          offset={120}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.backgroundWhite,
    borderRadius: 12,
  },
  view: {
    flex: 1,
    paddingTop: SIZES.large,
    paddingBottom: 2,
    paddingHorizontal: SIZES.large,
  },
  questionBox: {
    backgroundColor: COLORS.black,
    borderRadius: 12,
    padding: SIZES.medium,
    marginTop: SIZES.large,
    elevation: 10,
  },
  question: {
    fontFamily: FONT.medium,
    fontSize: SIZES.regular,
    color: COLORS.white,
    lineHeight: 16,
  },
  confirmButton: {
    width: 200,
    backgroundColor: COLORS.backgroundWhite,
    borderStyle: "solid",
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 100,
    marginTop: 42,
    alignSelf: "center",
  },
  confirmText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.regular,
    color: COLORS.black,
    textAlign: "center",
    paddingVertical: 8,
    lineHeight: 20,
  },
  horizontalScroll: {
    marginTop: 64,
    marginBottom: 36,
  },
});

export default Questions;
