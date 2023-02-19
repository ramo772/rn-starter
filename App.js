import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ChangeColorScreen from "./src/screens/ChangeColorScreen";
import ChangeColorScreenRefactored from "./src/screens/ChangeColorScreenRefactored";
import ChangeColorScreenReducer from "./src/screens/ChangeColorScreenReducer";
import CounterScreenReducer from "./src/screens/CounterScreenReducer";
import InputNameScreen from "./src/screens/InputNameScreen";
import InputPasswordScreen from "./src/screens/InputPasswordScreen";
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    ImageScreen: ImageScreen,
    Home: HomeScreen,
    Components: ComponentScreen,
    ListScreen: ListScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    ChangeColorScreen: ChangeColorScreen,
    ChangeColorScreenRefactored: ChangeColorScreenRefactored,
    ChangeColorScreenReducer: ChangeColorScreenReducer,
    CounterScreenReducer: CounterScreenReducer,
    InputNameScreen: InputNameScreen,
    InputPasswordScreen: InputPasswordScreen,
    BoxScreen:BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
