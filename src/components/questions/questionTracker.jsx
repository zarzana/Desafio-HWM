import React, { useRef, useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

function QuestionTracker({ currentQuestion, totalQuestions, offset = 0 }) {
  const scrollViewRef = useRef();
  const elementRef = useRef();
  const [firstLoad, setFirstLoad] = useState(true);

  const centerOnElement = () => {
    if (firstLoad) {
      elementRef.current.measure((fx, fy, width, height, px) => {
        const position = px + width / 2;
        scrollViewRef.current.scrollTo({ x: position, animated: true });
      });
      setFirstLoad(false);
    }
  };

  useEffect(() => {
    centerOnElement();
  }, []);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
      <View style={styles.container}>
        {[...Array(totalQuestions + offset).keys()].map((_, index) => {
          let textStyle = styles.biggerText;
          let boxStyle = styles.biggerBox;
          if (index < currentQuestion + offset) {
            textStyle = styles.smallerText;
            boxStyle = styles.smallerBox;
          } else if (index === currentQuestion + offset) {
            textStyle = styles.equalText;
            boxStyle = styles.equalBox;
          }
          return (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={index}>
              <View
                style={[styles.box, boxStyle]}
                ref={index === currentQuestion + offset ? elementRef : null}
                onLayout={index === currentQuestion + offset ? centerOnElement : null}
              >
                <Text style={[styles.text, textStyle]}>{index + 1}</Text>
              </View>
              {index !== totalQuestions - 1 + offset && <Text style={styles.separator}>••</Text>}
            </React.Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    height: 32,
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 8,
  },
  smallerBox: {
    backgroundColor: COLORS.white,
    borderStyle: "solid",
    borderColor: COLORS.black,
    borderWidth: 2,
  },
  equalBox: {
    height: 40,
    backgroundColor: COLORS.black,
  },
  biggerBox: {
    backgroundColor: COLORS.darkGray,
  },
  text: {
    lineHeight: 32,
    color: COLORS.white,
  },
  smallerText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
    lineHeight: 28,
    color: COLORS.black,
  },
  equalText: {
    lineHeight: 40,
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
  },
  biggerText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.large,
  },
  separator: {
    fontSize: 18,
    lineHeight: 32,
    paddingHorizontal: 4,
    color: COLORS.black,
    letterSpacing: 0,
  },
});

export default QuestionTracker;
