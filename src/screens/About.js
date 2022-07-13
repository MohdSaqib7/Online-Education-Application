import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
  import React from "react";
  
  const About = () => {
    return (
     <View>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainheader}> Online Education System</Text>
  
        <View>
          <Image
            style={styles.imgStyle}
            source={require("../../assets/about.jpg")}
          />
        </View>
  
        <View style={styles.aboutLayout}>
          <Text style={styles.heading}>About</Text>
          <Text style={styles.desc}>
            Online learning is so effective because students can finish their homework quickly and there is more time left for hobbies or for finding a job. And access to all resources of the traditional course helps participants learn wherever they are, leaving them the freedom to choose the time for study without location restriction
          </Text>
        </View>
  
        <Text style={styles.subHeader}> Follow me on Social Network </Text>
  
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL("https://www.linkedin.com")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com"
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Linking.openURL("https://mail.google.com/mail/?")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-cdn-web-development-flaticons-lineal-color-flat-icons.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.foot}>Design and Developed by Mohd Saqib &#169; 2022</Text>
     </View>
    );
  };
  

// CSS-------------------------------------------  
  const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor:"#ebebe0",
      paddingBottom:15
    },
    mainheader: {
      fontSize: 25,
      fontWeight:"bold",
      color: "#003399",
      marginTop:30,
      marginBottom:30
    },
    imgStyle: {
      width: 150,
      height: 150,
      borderRadius: 100,
    },
    aboutLayout: {
      marginVertical: 20,
      backgroundColor:"#ebebe0"
    },
    heading: {
      fontSize: 18,
      color: "#1a8cff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: 15,
      alignSelf: "center",
    },
    desc: {
      color: "#00cc99",
      marginLeft:15,
      marginRight:10
    },
    subHeader: {
      fontSize: 18,
      color: "#80aaff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginTop: 30,
      marginBottom: 40,
    },

    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginBottom:30
    },
  
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
    foot:{
      paddingVertical:7.5,
      backgroundColor:"#000000",
      color:"#ffffff",
      textAlign:"center"
    }
  });
  
  export default About;