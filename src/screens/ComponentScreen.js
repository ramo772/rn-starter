import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
function ComponentScreen() {
 const name= "omar";
  return (
    <View>
      <Text style={styles.header}>Getting Started With React Native!</Text>
      <Text style={{fontSize:20}}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45  },
});
export default ComponentScreen;
