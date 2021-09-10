import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  let myName = "Matt";
  return (
    <View>
      <Text style={styles.headerStyles}>Getting Started with react native</Text>
      <Text style={styles.subHeaderStyles}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    fontSize: 45,
  },
  subHeaderStyles: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
