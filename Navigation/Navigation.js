// Navigation/Navigation.js
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import Log from '../components/Log'
import Sex from '../components/Sex'

const LogStackNavigator = createStackNavigator({
  Log: { 
    screen: Log,
    navigationOptions: {
      title: 'Choix du personnage'
    }
  },

  Sex: {
      screen: Sex,
      navigationOptions: {
        title: 'Choix du Sexe'
      }
  }
})

export default createAppContainer(LogStackNavigator)