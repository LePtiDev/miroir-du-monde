// Navigation/Navigation.js
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import Log from '../components/Log'
import Sex from '../components/Sex'
import Race from '../components/Race';

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
  },

  Race: {
    screen: Race,
    navigationOptions: {
      title: 'Choix de la Race'
    }
  }
})

export default createAppContainer(LogStackNavigator)