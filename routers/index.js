import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabSreen from '../src/screens/tabScreen';

const RootStack = createStackNavigator(
  {
    TabSreenUser: TabSreen,
  },
  {
    initialRouteName: "TabSreenUser"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;