import React from 'react'
import {StyleSheet, View} from 'react-native'


class Sex extends React.Component {
  render() {
    return (
        <View style={styles.Navigation}>
          <View style={styles.homme}></View>
          <View style={styles.femme}></View>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  Navigation: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },

  homme: {
    height: 150,
    width: 150, 
    backgroundColor: "blue",
  },

  femme: {
    height: 150,
    width: 150, 
    backgroundColor: "blue",
  },
});


export default Sex