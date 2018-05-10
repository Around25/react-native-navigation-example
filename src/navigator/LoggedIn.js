import { createBottomTabNavigator } from 'react-navigation'

import Dashboard from '../components/Main/Dashboard'
import Profile from '../components/Main/Profile'

const LoggedInNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Profile: {
    screen: Profile
  }
});

export default LoggedInNavigator
