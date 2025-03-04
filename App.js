import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  HomeScreen,
  ComponentScreen,
  ListScreen,
  ImageScreen,
  CounterScreen,
  ColorScreen,
  SquareScreen,
  TextScreen,
  BoxScreen
} from "./src/screens";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
