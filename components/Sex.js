import React from 'react'
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';

class Sex extends React.Component {
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
          <TouchableOpacity style={styles.homme} onPress={() => this.props.navigation.navigate("Race")}>
            <Image style={{width : 90, height : 90}} source={require("../img/homme.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.femme} onPress={() => this.props.navigation.navigate("Race")}>
            <Image style={{width : 55, height : 100}} source={require("../img/feminin.png")}/>
          </TouchableOpacity>
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
    backgroundColor: "#706FD3",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingLeft: 30,
    paddingTop: 30,
  },

  femme: {
    height: 150,
    width: 150, 
    backgroundColor: "#706FD3",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingLeft: 47.5,
    paddingTop: 25,
  },
});


export default Sex