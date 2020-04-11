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

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

function SearchScreen({ navigation, route }) {
  const [textInputVal, setTextInputVal] = useState("");
  const { movieList } = route.params;
  const { searchedMovie } = route.params;
  const { message } = route.params;
  //   console.log("in search", searchedMovie, "message", message, movieList);

  return (
    <View style={styles.container}>
      <Text>What movie do you want information on?</Text>
      <TextInput
        value={textInputVal}
        onChangeText={(text) => setTextInputVal(text)}
      />
      {movieList && (
        <FlatList
          data={movieList}
          renderItem={(item) => {
            return <Item title={item.item.Title} />;
          }}
          keyExtractor={(item) => String(item.key)}
        />
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("Movie", { searchedMovie })}
      >
        <Text>Search!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Hello")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default SearchScreen;
