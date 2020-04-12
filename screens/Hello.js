import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import COLS from "./colorThemes";

// TODO:
// Add tests
// cache local data

function HelloScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>The Open Movie Database</Text>
      <Text style={styles.h2}>(www.omdbapi.com)</Text>
      <Text style={styles.p}>
        The Open Movie Database (OMBd) is a free and open source (CC BY-NC 4.0.)
        movie database of over 280,000 movies.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Search");
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
    backgroundColor: COLS.col3,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: COLS.col5,
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: COLS.col2,
  },
  h2: {
    fontSize: 24,
    textAlign: "center",
    color: COLS.col5,
    padding: 5,
    width: "80%",
  },
  p: {
    fontSize: 18,
    width: "80%",
    textAlign: "center",
  },
  button: {
    backgroundColor: COLS.col2,
    color: COLS.col4,
    borderColor: COLS.col4,
    borderWidth: 5,
    borderStyle: "solid",
    borderRadius: 25,
    margin: 10,
    padding: 10,
  },
});

export default HelloScreen;
