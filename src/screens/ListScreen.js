import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
function ListScreen() {
  const friends = [
    {
      name: "Friend 1",
      Age: 20,
    },

    {
      name: "Friend 2",
      Age: 45,
    },
    {
      name: "Friend 3",
      Age: 32,
    },
    {
      name: "Friend 4",
      Age: 27,
    },
    {
      name: "Friend 5",
      Age: 53,
    },
    {
      name: "Friend 6",
      Age: 30,
    },
  ];
  return (
    <FlatList
      key={(item) => item.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.text}>
            {item.name} - Age {item.Age}
          </Text>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 30,
    marginLeft: 10,
  },
});
export default ListScreen;
