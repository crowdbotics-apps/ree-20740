import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2112317Navigator from '../features/BlankScreen2112317/navigator';
import BlankScreen1112316Navigator from '../features/BlankScreen1112316/navigator';
import BlankScreen0112149Navigator from '../features/BlankScreen0112149/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2112317: { screen: BlankScreen2112317Navigator },
BlankScreen1112316: { screen: BlankScreen1112316Navigator },
BlankScreen0112149: { screen: BlankScreen0112149Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
