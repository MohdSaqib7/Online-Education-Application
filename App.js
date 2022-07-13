import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Course from "./src/screens/Course";
import CourseDetails from "./src/screens/CourseDetails";
import Quiz from "./src/screens/Quiz";
import Practice from "./src/screens/Practice";
import Answer from "./src/screens/Answer";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";

import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* home screen  */}
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {(props) => <Home {...props} channelName={""} />}
        </Stack.Screen>

        {/* Course Screen  */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "Courses",
            headerTitleAlign: "center",
          }}
        />

        {/* Practice Screen  */}
        <Stack.Screen
          name="Practice"
          component={Practice}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "Practice Questions",
            headerTitleAlign: "center",
          }}
        />

        {/* Quiz Screen  */}
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "Aptitute",
            headerTitleAlign: "center",
          }}
        />

        {/* About Screen  */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "About Us",
            headerTitleAlign: "center",
          }}
        />

        {/* Contact Screen  */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/* CourseDetails Screen  */}
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/* Answer Screen  */}
        <Stack.Screen
          name="Answer"
          component={Answer}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}