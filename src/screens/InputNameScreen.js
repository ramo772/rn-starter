import { React, useState } from "react";
import { View, Text, TextInput } from "react-native";
function InputNameScreen() {
  let [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 50,
        }}
        autoCapitalize="none"
        autoCorrect={true}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      <Text>{name}</Text>
    </View>
  );
}

export default InputNameScreen;
