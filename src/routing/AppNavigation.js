import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../screens/Home/Home";
import DrawerContainer from "../screens/DrawerContainer/DrawerContainer";
import Login from "../screens/Login/Login";
import SignUp from "../screens/Login/SignUp";
import ForgotPassword from "../screens/Login/ForgotPassword";
import CreateCost from "../screens/Cost/CreateCost";
import CreateTask from "../screens/Task/CreateTask";
import CreateTrademark from "../screens/Trademark/CreateTrademark";
import CreateNotes from "../screens/ShortNotes/CreateNotes";
import CreateTimesheet from "../screens/Timesheet/CreateTimesheet";
import CreateCase from "../screens/Case/CreateAttachment";
import CreateAttachment from "../screens/Attachment/CreateAttachment";

const MainNavigator = createStackNavigator(
  {
    Login: Login,
    ForgotPassword: ForgotPassword,
    SignUp: SignUp,
    Home: Home,
    CreateCost: CreateCost,
    CreateTask: CreateTask,
    CreateTrademark: CreateTrademark,
    CreateNotes: CreateNotes,
    CreateTimesheet: CreateTimesheet,
    CreateCase: CreateCase,
    CreateAttachment: CreateAttachment,
  },
  {
    initialRouteName: "Login",
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
    }),
  }
);
const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator,
  },
  {
    drawerPosition: "left",
    initialRouteName: "Main",
    drawerWidth: 250,
    contentComponent: DrawerContainer,
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;
