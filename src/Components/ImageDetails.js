import React from "react";
import { Image, Text, View } from "react-native";
function ImageDetails({ title, image, ImageScore }) {
  // const img = `../../assets/${image}.jpg`;
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>Image score - {ImageScore}</Text>
    </View>
  );
}

export default ImageDetails;
