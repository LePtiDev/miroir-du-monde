import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';


class Race extends React.Component {
  render() {
    return (
        <View style={styles.Navigation}>
          <LinearGradient
                    colors={['#40407A', '#A72196']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 900,
                    }}
            />
        </View>

    )
  }
}

var styles = StyleSheet.create({

  gradient: {
    flex: 1,
  },

  Navigation: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },

});


export default Race