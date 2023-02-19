import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";
import ColorButton from "../Components/ColorButton";

const COLOR_INCREAMENT = 10;

const reducer = (color, change) => {
  if (
    color[change.color] + change.amount < 255 &&
    color[change.color] + change.amount > 0
  ) {
    return { ...color, [change.color]: color[change.color] + change.amount };
  } else {
    return color;
  }
};
function ChangeColorScreenReducer() {
  let [color, setColor] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <ColorButton
        colorName="Red"
        onIncrease={() => {
          setColor({ color: "red", amount: COLOR_INCREAMENT });
        }}
        onDecrease={() => {
          setColor({ color: "red", amount: -1 * COLOR_INCREAMENT });
        }}
      />
      <ColorButton
        colorName="Green"
        onIncrease={() => {
          setColor({ color: "green", amount: COLOR_INCREAMENT });
        }}
        onDecrease={() => {
          setColor({ color: "green", amount: -1 * COLOR_INCREAMENT });
        }}
      />
      <ColorButton
        colorName="Blue"
        onIncrease={() => {
          setColor({ color: "blue", amount: COLOR_INCREAMENT });
        }}
        onDecrease={() => {
          setColor({ color: "blue", amount: -1 * COLOR_INCREAMENT });
        }}
      />

      <View
        style={{
          height: 50,
          width: 50,
          backgroundColor: `rgb(${color["red"]},${color["green"]},${color["blue"]})`,
        }}
      ></View>
    </View>
  );
}

export default ChangeColorScreenReducer;
