import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

function HelloScreen({ navigation, route }) {
  const { movieList } = route.params;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Also, hi again Murray!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Search"), { movieList: movieList };
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
