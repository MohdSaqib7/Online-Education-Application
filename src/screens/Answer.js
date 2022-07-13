import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Answers from "../api/Answerapi";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Answer = ({ navigation, route }) => {
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  const id = route.params.answerId;
  console.log(id);

  const selectedAnswer = Answers.find((element) => {
    return id === element.id;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.answerContainer}>

        <Text style={styles.description}>{selectedAnswer.description}</Text>

        <Text style={[styles.description, styles.subAnswer]}>
          {selectedAnswer.answer1}
        </Text>
       
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Practice")}>
            <Text style={styles.buttonText}> Open IDE </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// CSS-----------------------------------------------
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "90ee90",
    paddingHorizontal: 20,
  },
  answerContainer: {
    paddingBottom: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 15,
  },

  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#009900",
    paddingBottom: 10,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 20,
  },

  subAnswer: {
    textAlign:"left",
    color: "#262626",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#003d66",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "WorkSans_400Regular",
  },
});

export default Answer;