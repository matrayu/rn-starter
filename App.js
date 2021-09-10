import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen, ComponentScreen, ListScreen, ImageScreen } from './src/screens';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
