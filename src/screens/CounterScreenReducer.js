import React, { Component, useReducer } from "react";

import { Button, View, Text } from "react-native";
const reducer = (count, amount) => {
  return count + amount;
};
function CounterScreenReducer() {
  const [count, setCount] = useReducer(reducer, 0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCount(+1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCount(-1);
        }}
      />
      <Text>Current Count {count}</Text>
    </View>
  );
}

export default CounterScreenReducer;
