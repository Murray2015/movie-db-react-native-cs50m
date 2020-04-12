import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

// TODO
// Style homepage
// Add tests
// cache local data

function HelloScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Also, hi again Murray!</Text>
      <TouchableOpacity
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HelloScreen;
