import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

function ColorScreen() {
  let [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColors((colors) => [
            ...colors,
            [
              Math.floor(Math.random() * 256),
              Math.floor(Math.random() * 256),
              Math.floor(Math.random() * 256),
            ],
          ]);
        }}
      />

      <FlatList
        key={(item) => item.name}
        data={colors}
        renderItem={({ item }) => {
          return (
            <Text
              style={{
                width: 100,
                height: 100,
                backgroundColor: `rgb(${item[0]},${item[1]},${item[2]})`,
              }}
            ></Text>
          );
        }}
      />

      {colors.map((color) => (
        <Text></Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "green",
  },
});

export default ColorScreen;
