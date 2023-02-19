import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import ColorButton from "../Components/ColorButton";

const COLOR_INCREAMENT = 10;

function ChangeColorScreen() {
  let [red, setRed] = useState(0);
  let [green, setGreen] = useState(0);
  let [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? "" : setRed(red + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0 ? "" : setBlue(blue + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? ""
          : setGreen(green + change);
        break;
    }
  };
  return (
    <View>
      {/* {console.log(color["Red"])} */}
      <ColorButton
        colorName="Red"
        onIncrease={() => {
          setColor("red", COLOR_INCREAMENT);
        }}
        onDecrease={() => {
          setColor("red", -1 * COLOR_INCREAMENT);
        }}
      />
      <ColorButton
        colorName="Green"
        onIncrease={() => {
          setColor("green", COLOR_INCREAMENT);
        }}
        onDecrease={() => {
          setColor("green", -1 * COLOR_INCREAMENT);
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
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
}

export default ChangeColorScreen;
