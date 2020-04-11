import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import COLS from "./colorThemes";

function MovieScreen({ navigation, route }) {
  const { searchedMovie } = route.params;
  console.log("movie inside Movie: ", searchedMovie);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.container}>
        <Text
          style={style.h1}
        >{`${searchedMovie.Title} (${searchedMovie.Year})`}</Text>
        <View style={style.basicInfo}>
          <Text style={style.Text}>
            <Text style={{ fontWeight: "bold" }}>Actors:</Text>
            {`${searchedMovie.Year}`}
          </Text>
          <Text style={style.Text}>
            <Text style={{ fontWeight: "bold" }}>Director:</Text>
            {`${searchedMovie.Director}`}
          </Text>
          <Text style={style.Text}>
            <Text style={{ fontWeight: "bold" }}>Genre:</Text>
            {`${searchedMovie.Genre}`}
          </Text>
          <Text style={style.Text}>
            <Text style={{ fontWeight: "bold" }}>Runtime:</Text>
            {`${searchedMovie.Runtime}`}
          </Text>
          <Text style={style.Text}>
            <Text style={{ fontWeight: "bold" }}>Plot:</Text>
            {`${searchedMovie.Plot}`}
          </Text>
        </View>
        <Image style={style.img} source={{ uri: searchedMovie.Poster }} />
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLS.col2,
  },
  h1: {
    fontSize: 40,
    backgroundColor: COLS.col1,
    width: "100%",
    textAlign: "center",
    color: COLS.col5,
    fontWeight: "bold",
    padding: 5,
  },
  img: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  Text: {
    textAlign: "center",
    padding: 5,
  },
  basicInfo: {
    backgroundColor: COLS.col3,
    padding: 5,
    width: "100%",
  },
});

export default MovieScreen;
// https://coolors.co/05a8aa-b8d5b8-d7b49e-dc602e-bc412b
