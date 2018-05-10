import { createSwitchNavigator } from 'react-navigation'

import LoggedOutNavigator from './LoggedOut'
import LoggedInNavigator from './LoggedIn'

export const getRootNavigator = (loggedIn = false) => createSwitchNavigator(
  {
    LoggedOut: {
      screen: LoggedOutNavigator
    },
    LoggedIn: {
      screen: LoggedInNavigator
    }
  },
  {
    initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
  }
);
