import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import ColorButton from "../Components/ColorButton";

const COLOR_INCREAMENT = 10;

function ChangeColorScreenRefactored() {
  let [color, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
  });
  const setColorReducer = (color, change) => {
    let changedColor = change.color;
    color = { ...color, [changedColor]: color.red + change.change };
    setColor(color);
  };
  return (
    <View>
      <ColorButton
        colorName="Red"
        onIncrease={() => {
          setColorReducer(color, { color: "red", change: COLOR_INCREAMENT });
        }}
        onDecrease={() => {
          setColorReducer(color, { color: "red", change:  -1 * COLOR_INCREAMENT });
        }}
      />
      <ColorButton
        colorName="Green"
        onIncrease={() => {
          setColorReducer(color, { color: "green", change: COLOR_INCREAMENT });
        }}
        onDecrease={() => {
          setColorReducer(color, { color: "green", change:  -1 * COLOR_INCREAMENT });
        }}
      />
      <ColorButton
        colorName="Blue"
        onIncrease={() => {
          setColor("blue", COLOR_INCREAMENT);
        }}
        onDecrease={() => {
          setColor("blue", -1 * COLOR_INCREAMENT);
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

export default ChangeColorScreenRefactored;
