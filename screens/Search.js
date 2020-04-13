import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import COLS from "./colorThemes";

// TODO:
// if nothing returned navigate to a screen saying there is nothing of that name.

const screenWidth = Dimensions.get("window").width;

function Item({ title, setTextInputVal }) {
  return (
    <TouchableOpacity onPress={() => setTextInputVal(title)}>
      <View style={styles.item}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function SearchScreen({ navigation, route }) {
  const [movieList, setMovieList] = useState([]);
  const [getThisMovie, setGetThisMovie] = useState("blade");
  const [textInputVal, setTextInputVal] = useState("");
  const [searchPressed, setSearchPressed] = useState(false);

  useEffect(() => {
    if (!textInputVal) {
      setMovieList([]);
    } else {
      console.log("fetch text input: ", textInputVal);
      fetch(`https://www.omdbapi.com/?apikey=934a3d98&s=${textInputVal}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.Response === "False") {
            throw new Error(json.Error);
          } else {
            return json.Search.map((movie, ind) => {
              return { ...movie, key: ind };
            });
          }
        })
        .then((data) => {
          setMovieList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [textInputVal]);

  useEffect(() => {
    if (searchPressed && getThisMovie) {
      setSearchPressed(false);
      navigation.navigate("Movie", { getThisMovie });
    }
  }, [getThisMovie]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What movie do you want information on?</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          value={textInputVal}
          onChangeText={(text) => setTextInputVal(text)}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.xButton}
          onPress={() => setTextInputVal("")}
        >
          <Text style={styles.text}>X</Text>
        </TouchableOpacity>
      </View>
      {movieList && (
        <FlatList
          data={movieList}
          renderItem={(item) => {
            return (
              <Item title={item.item.Title} setTextInputVal={setTextInputVal} />
            );
          }}
          keyExtractor={(item) => String(item.key)}
        />
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setSearchPressed(true);
          setGetThisMovie(textInputVal);
        }}
      >
        <Text style={styles.text}>Search!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: COLS.col2,
  },
  textInput: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: COLS.col1,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "black",
    padding: 5,
    textAlign: "center",
    fontSize: 24,
    borderRadius: 10,
    width: screenWidth * 0.9,
  },
  item: {
    backgroundColor: COLS.col1,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    color: COLS.col2,
  },
  button: {
    backgroundColor: COLS.col3,
    padding: 5,
    borderRadius: 10,
    width: "50%",
    marginVertical: 8,
    fontSize: 24,
    alignSelf: "center",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: COLS.col5,
    color: COLS.col2,
  },
  xButton: {
    position: "relative",
    left: -55,
    padding: 5,
    width: 30,
    marginVertical: 8,
    fontSize: 24,
    alignSelf: "center",
  },
});

export default SearchScreen;
