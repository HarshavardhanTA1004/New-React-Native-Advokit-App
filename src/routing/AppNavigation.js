import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'

import HomeScreen from '../screens/Home/HomeScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import LoginScreen from '../screens/Login/LoginScreen';
import CreateCostScreen from '../screens/Cost/CreateCostScreen';
import CreateTaskScreen from '../screens/Task/CreateTaskScreen';
import CreateTrademarkScreen from '../screens/Trademark/CreateTrademarkScreen';
import CreateNotesScreen from '../screens/ShortNotes/CreateNotesScreen';
import CreateTimesheetScreen from '../screens/Timesheet/CreateTimesheetScreen';


const MainNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Home: HomeScreen,
    CreateCost: CreateCostScreen,
    CreateTask: CreateTaskScreen,
    CreateTrademark: CreateTrademarkScreen,
    CreateNotes: CreateNotesScreen,
    CreateTimesheet: CreateTimesheetScreen,

    
  },
  {
    initialRouteName: 'Login',
    // headerMode: 'float',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      }
    })
  }
); 
const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

 
export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;