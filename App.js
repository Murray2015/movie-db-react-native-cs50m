import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HelloScreen from "./screens/Hello";
import SearchScreen from "./screens/Search";
import MovieScreen from "./screens/Movie";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{ title: "Home" }}
          component={HelloScreen}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
