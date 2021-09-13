import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 30 },
    { name: "Friend #3", age: 31 },
    { name: "Friend #4", age: 12 },
    { name: "Friend #5", age: 45 },
    { name: "Friend #6", age: 40 },
    { name: "Friend #7", age: 42 },
    { name: "Friend #9", age: 35 },
  ];

  return (
    <FlatList
      keyExtractor={friends => friends.name.toString()}
      showsHorizontalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.subHeaderStyles}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    fontSize: 45,
    fontWeight: "normal",
  },
  subHeaderStyles: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "normal",
  },
});

export default ListScreen;
