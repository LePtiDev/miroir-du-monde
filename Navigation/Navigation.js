// Navigation/Navigation.js
import SafeAreaView from 'react-native-safe-area-view';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack'

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