import React from "react";
import ImageDetails from "../Components/ImageDetails";
import { View } from "react-native";
function ImageScreen() {
  return (
    <View>
      <ImageDetails
        title="Forest"
        image={require("../../assets/forest.jpg")}
        ImageScore="9"
      />
      <ImageDetails
        title="Beach"
        image={require("../../assets/beach.jpg")}
        ImageScore="7"
      />
      <ImageDetails
        title="Mountain"
        image={require("../../assets/mountain.jpg")}
        ImageScore="4"
      />
    </View>
  );
}

export default ImageScreen;
