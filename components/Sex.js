import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'


class Sex extends React.Component {
  render() {
    return (
        <View style={styles.Navigation}>
          <TouchableOpacity style={styles.homme}></TouchableOpacity>
          <TouchableOpacity style={styles.femme}></TouchableOpacity>
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