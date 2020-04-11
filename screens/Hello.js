import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

function HelloScreen({ navigation }) {
  const [movieList, setMovieList] = useState([]);
  const [getThisMovie, setGetThisMovie] = useState("blade");
  const [searchedMovie, setSearchedMovie] = useState({});

  useEffect(() => {
    fetch("https://www.omdbapi.com/?apikey=934a3d98&s=blade")
      .then((response) => response.json())
      .then((json) =>
        json.Search.map((movie, ind) => {
          return { ...movie, key: ind };
        })
      )
      .then((json) => {
        setMovieList(json);
        // console.log("movielist inside useeffect", movieList);
      });
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=934a3d98&t=${getThisMovie}`
      );
      const data = await res.json();
      setSearchedMovie(data);
      console.log(
        "Movie data in Hello's useEffect: ",
        searchedMovie.Title,
        " , and getthismovie: ",
        getThisMovie
      );
    })();
  }, [getThisMovie]);

  console.log("in hello: ", searchedMovie, movieList, setGetThisMovie);

  function againSetGetThisMovie(movie) {
    setGetThisMovie(movie);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Also, hi again Murray!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search", {
            movieList,
            searchedMovie,
            againSetGetThisMovie,
          });
        }}
      >
        <Text>Go to movie search!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HelloScreen;
