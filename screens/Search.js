import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import COLS from "./colorThemes";

// TODO
// Move useEffect state into Search component
// Change useEffect of movie search into useLayoutEffect
// if nothing returned navigate to a screen saying there is nothing of that name.
// Change autocomplete state so autocomplete list updates when other things typed into search bar
// Add "x" button to the right hand side of the search bar to clear the screen.

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
  const [textInputVal, setTextInputVal] = useState("");
  const { movieList, searchedMovie, againSetGetThisMovie } = route.params;
  console.log(
    "in search",
    movieList,
    searchedMovie.Title,
    againSetGetThisMovie
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What movie do you want information on?</Text>
      <TextInput
        value={textInputVal}
        onChangeText={(text) => setTextInputVal(text)}
        style={styles.textInput}
      />
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
          againSetGetThisMovie(textInputVal);
          navigation.navigate("Movie", { searchedMovie });
        }}
      >
        <Text style={styles.text}>Search!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Hello")}
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
    backgroundColor: COLS.col3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    padding: 5,
    textAlign: "center",
    fontSize: 24,
  },
  item: {
    backgroundColor: COLS.col1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLS.col3,
    padding: 5,
    borderRadius: 20,
    width: "50%",
    marginVertical: 8,
    fontSize: 24,
    alignSelf: "center",
  },
});

export default SearchScreen;
