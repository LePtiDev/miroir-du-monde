// Navigation/Navigation.js
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import Log from '../components/Log'

const LogStackNavigator = createStackNavigator({
  Log: { 
    screen: Log,
    navigationOptions: {
      title: 'Choix du personnage'
    }
  }
})

export default createAppContainer(LogStackNavigator)