import { ImageBackground,StyleSheet, Text, View,} from "react-native";
import React from "react";
import Menu from "../component/Menu";
const image = require("../../assets/a3.webp");

const Home = (props) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.navHeader}> &#8801;                                   &#9993;  </Text>
        <Text style={styles.above}>  Skill reflects your knowledge</Text>
        <Text style={styles.below}>
          <Text>&#128214;</Text> 
        </Text>
      </ImageBackground>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  image:{
    flex:1,
    marginBottom:0,
    marginTop:5
  },

  navHeader: {
    fontSize: 35,
    backgroundColor:"#000000",
    color: "#b3ffcc",
    fontWeight: "bold",
    position: 'absolute',  
  },

  above:{
    fontSize:26,
    color:"#ff884d",
    fontWeight:"bold",
    position:"absolute",
    top:90,
  },
  below:{
    fontSize:90,
    marginLeft:125,
    position:"absolute",
    top:515,
  },

  lineStyle: {
    marginTop: 0.9,
    marginBottom: 0.5,
  },
});

export default Home;