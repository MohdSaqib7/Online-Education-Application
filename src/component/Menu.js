import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text} from "react-native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Course")}>
        {<Text style={{color:"#b3ffcc",fontWeight:"bold",fontSize:18}}>Course</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Practice")}>
        {<Text style={{color:"#b3ffcc",fontWeight:"bold",fontSize:18}}>Practice</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Quiz")}>
        {<Text style={{color:"#b3ffcc",fontWeight:"bold",fontSize:18}}>Quiz</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}>
        {<Text style={{color:"#b3ffcc",fontWeight:"bold",fontSize:18}}>About</Text>}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Contact")}>
        {<Text style={{color:"#b3ffcc",fontWeight:"bold",fontSize:18,}}>Contact</Text>}
      </TouchableOpacity>
    </View>
  );
};

// CSS for Menu bar

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#000000",
    paddingTop:5,
    paddingBottom:5
  },
});

export default Menu;