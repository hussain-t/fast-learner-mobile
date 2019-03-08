import { createSwitchNavigator } from 'react-navigation';

import { LoginStack, BottomTabNavigator } from './Router';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: LoginStack,
    App: BottomTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
