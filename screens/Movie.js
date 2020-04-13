import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import COLS from "./colorThemes";

// TODO:
// Display loading screen while fetching

const screenWidth = Dimensions.get("window").width;

function MovieScreen({ navigation, route }) {
  const [searchedMovie, setSearchedMovie] = useState({});
  const [movieChartData, setMovieChartData] = useState();
  const { getThisMovie } = route.params;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=934a3d98&t=${getThisMovie}`
      );
      const data = await res.json();
      setSearchedMovie(data);
    })();
  }, [getThisMovie]);

  function processRatings(rating) {
    if (rating.includes("%")) {
      return parseInt(rating.replace("%", "")) / 100;
    } else if (rating.split("/")[1] == 100) {
      return parseInt(rating.split("/")[0]) / 100;
    } else if (rating.split("/")[1] == 10) {
      return parseInt(rating.split("/")[0]) / 10;
    } else {
      throw new Error("Unexpected value in data");
    }
  }

  useEffect(() => {
    if (
      Object.keys(searchedMovie).length !== 0 &&
      searchedMovie.constructor === Object
    ) {
      const data = {
        labels: [
          searchedMovie.Ratings[0].Source,
          searchedMovie.Ratings[1].Source,
          searchedMovie.Ratings[2].Source,
        ],
        data: [
          processRatings(searchedMovie.Ratings[0].Value),
          processRatings(searchedMovie.Ratings[1].Value),
          processRatings(searchedMovie.Ratings[2].Value),
        ],
      };
      console.log(data);
      setMovieChartData(data);
    }
  }, [searchedMovie]);

  const chartConfig = {
    backgroundGradientFrom: "#eff3ff",
    backgroundGradientTo: "#efefef",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Text
        style={style.h1}
      >{`${searchedMovie.Title} (${searchedMovie.Year})`}</Text>
      <View style={style.basicInfo}>
        <Text style={style.Text}>
          <Text style={{ fontWeight: "bold" }}>Actors: </Text>
          {`${searchedMovie.Actors}`}
        </Text>
        <Text style={style.Text}>
          <Text style={{ fontWeight: "bold" }}>Director: </Text>
          {`${searchedMovie.Director}`}
        </Text>
        <Text style={style.Text}>
          <Text style={{ fontWeight: "bold" }}>Genre: </Text>
          {`${searchedMovie.Genre}`}
        </Text>
        <Text style={style.Text}>
          <Text style={{ fontWeight: "bold" }}>Runtime: </Text>
          {`${searchedMovie.Runtime}`}
        </Text>
        <Text style={style.Text}>
          <Text style={{ fontWeight: "bold" }}>Plot: </Text>
          {`${searchedMovie.Plot}`}
        </Text>
      </View>
      <Image style={style.img} source={{ uri: searchedMovie.Poster }} />
      {movieChartData && (
        <ProgressChart
          data={movieChartData}
          width={screenWidth}
          height={Dimensions.get("window").height * 0.25}
          chartConfig={chartConfig}
        />
      )}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: COLS.col2,
  },
  h1: {
    fontSize: 40,
    backgroundColor: COLS.col2,
    width: "100%",
    textAlign: "center",
    color: COLS.col5,
    fontWeight: "bold",
    padding: 5,
  },
  img: {
    width: screenWidth,
    aspectRatio: 2 / 3,
    resizeMode: "contain",
  },
  Text: {
    textAlign: "center",
    padding: 5,
    color: COLS.col1,
  },
  basicInfo: {
    backgroundColor: COLS.col3,
    padding: 5,
    width: screenWidth,
  },
});

export default MovieScreen;
