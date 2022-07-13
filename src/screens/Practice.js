import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Answers from "../api/Answerapi";

const Practice = ({ navigation }) => {
  const practiceCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.practiceContainer}>

          <Text style={styles.description}>{item.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                navigation.navigate("Answer", {
                  answerId: item.id,
                })
              }>
              <Text style={styles.buttonText}> Solutions </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Answers}
      renderItem={practiceCard}
    />
  );
};

// CSS----------------------------------------
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 10,
    backgroundColor:"#000000"
  },
  practiceContainer: {
    padding: 10,
    backgroundColor: "#ebebe0",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 10,
  },
  description: {
    textAlign: "center",
    paddingBottom: 15,
    paddingTop: 15,
    lineHeight: 15,
    fontSize: 18,
    color: "#ff3300",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#4d88ff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#eee",
    textTransform: "capitalize",
  },
});

export default Practice;