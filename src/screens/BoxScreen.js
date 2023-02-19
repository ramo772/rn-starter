import React from "react";
import { View, Text, StyleSheet } from "react-native";

function BoxScreen() {
  return (
    <>
      {/* <View style={style.ViewStyle}>
        <Text style={style.text}>Hi Box</Text>
      </View> */}
      {/* flex */}
      {/* <>
        <View style={style.ViewStyleFlex}>
          <Text style={style.textoneFlex}>Hi Box</Text>
          <Text style={style.texttwoFlex}>Hi Box</Text>
          <Text style={style.textthreeFlex}>Hi Box</Text>
        </View>
      </> */}

      {/* Exercise */}
      <>
        <View style={style.ExerciseParent}>
          <View style={style.ExerciseChildOne}></View>
          <View style={style.ExerciseChildThree}></View>
          <View style={style.ExerciseChildTwo}></View>
        </View>
      </>
    </>
  );
}
const style = StyleSheet.create({
  ViewStyle: {
    borderWidth: 2,
  },
  text: {
    borderWidth: 2,
    borderColor: "red",
  },
  ViewStyleFlex: {
    height: 100,
    borderWidth: 2,
    flexDirection: "row",
  },
  textFlex: {
    borderWidth: 2,
    borderColor: "red",
  },
  textoneFlex: {
    borderWidth: 2,
    borderColor: "red",
  },
  texttwoFlex: {
    borderWidth: 2,
    flex: 1,
    borderColor: "red",
  },
  textthreeFlex: {
    borderWidth: 2,
    borderColor: "red",
  },
  ExerciseParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
  },
  ExerciseChildOne: {
    width: 75,
    height: 50,
    backgroundColor: "red",
  },
  ExerciseChildTwo: {
    width: 75,
    height: 50,

    backgroundColor: "purple",
  },
  ExerciseChildThree: {
    width: 75,
    height: 50,
    alignSelf: "flex-end",
    backgroundColor: "green",
  },
});
export default BoxScreen;
