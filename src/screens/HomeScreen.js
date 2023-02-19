import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  let c = 1;
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Text style={styles.text}>{c}</Text>

      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components demo"
      />
      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate("ListScreen")}
      />

      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate("ImageScreen")}
      />

      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate("CounterScreen")}
      />

      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate("ColorScreen")}
      />

      <Button
        title="Go to Change Color Refactored demo"
        onPress={() => navigation.navigate("ChangeColorScreenRefactored")}
      />
      <Button
        title="Go to Change Color Reducer demo"
        onPress={() => navigation.navigate("ChangeColorScreenReducer")}
      />
      <Button
        title="Go to Counter Reducer demo"
        onPress={() => navigation.navigate("CounterScreenReducer")}
      />
      <Button
        title="Go to Input Name demo"
        onPress={() => navigation.navigate("InputNameScreen")}
      />
      <Button
        title="Go to Input Password demo"
        onPress={() => navigation.navigate("InputPasswordScreen")}
      />
      <Button
        title="Go to Input Box Screen demo"
        onPress={() => navigation.navigate("BoxScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
