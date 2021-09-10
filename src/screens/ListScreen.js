import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #9" },
  ];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text key={item.name.toString()} style={styles.subHeaderStyles}>
            {item.name}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  headerStyles: {
    fontSize: 45,
  },
  subHeaderStyles: {
    fontSize: 20,
    marginVertical: 50,
  },
});

export default ListScreen;
