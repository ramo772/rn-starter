import { React, useState } from "react";
import { View, Text, TextInput } from "react-native";
function InputPasswordScreen() {
  let [password, setPassword] = useState("");
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
        value={password}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />
      {password.length < 5 ? <Text>{"password must be longer than 5 charachters"}</Text> : ""}
    </View>
  );
}

export default InputPasswordScreen;
