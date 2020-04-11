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
      <Stack.Navigator initialRouteName="Hello">
        <Stack.Screen
          name="Hello"
          options={{ title: "Hello" }}
          component={HelloScreen}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* 
///////////////////////////////// PLAN/////////////////////////////////
Make fetch request - https://www.omdbapi.com/?apikey=934a3d98&s=blade
Make autocomplete search 
SCREENS
  - Home / welcome screen 
    - Welcome message 
      - Text, h1
    - Graphic 
      - <Image source={require(url)}
    - Search Movies
      - TouchableOpacity, Text
    - Get a random movie
      -TouchableOpacity, Text
  - Search screen 
    - Input field to search in 
      - <TextInput 
    - Autocomplete on the search bar 
      - <ScrollView
    - Selecting a movie fills the search bar, stops the autocomplete (otherwise "blade" would not just show the wesley snipe movie, but also "blade runner"), runs the fetch request, and changes screen (stack nav) to the result.
      - each needs to be a <TouchableOpacity and a <Text I think ? 
  - Selected movie screen
    - Title 
      - <Text
    - Movie poster 
      - <Image source=
    - Description 
      - <ScrollView and <Text
    - Graph of critics reviews 
      - React Native Chart Kit 

STATE 
  - Form 
  - Form autocomplete results
  - Searched term 
  - Search results 

*/
