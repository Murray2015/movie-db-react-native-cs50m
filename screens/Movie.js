import React, { useState, useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import COLS from "./colorThemes";

// TODO:
// Display loading screen while fetching
// Graph of critics reviews

function MovieScreen({ navigation, route }) {
  const [searchedMovie, setSearchedMovie] = useState({});
  const { getThisMovie } = route.params;
  useLayoutEffect(() => {
    (async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=934a3d98&t=${getThisMovie}`
      );
      const data = await res.json();
      setSearchedMovie(data);
    })();
  }, [getThisMovie]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.container}>
        <Text
          style={style.h1}
        >{`${searchedMovie.Title} (${searchedMovie.Year})`}</Text>
        <View style={style.basicInfo}>
          <Text style={style.Text}>
            <Text style={{ fontWeight: "bold" }}>Actors:</Text>
            {`${searchedMovie.Actors}`}
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
