
import React from 'react'
import Navigation from './Navigation/Navigation'
import {StyleSheet} from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <Navigation style={styles.Navigation}></Navigation>
    )
  }
}

var styles = StyleSheet.create({

  Navigation: {
      backgroundColor: "red",
  },
});
