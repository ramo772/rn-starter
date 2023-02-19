import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

function ColorButton({ colorName, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{colorName}</Text>
      <Button
        title={`More ${colorName}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Less ${colorName}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
}

export default ColorButton;
