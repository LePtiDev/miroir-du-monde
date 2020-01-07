import React from 'react'
import {StyleSheet, View, Text} from 'react-native'

//components

import Personnage from './Personnage'

class Log extends React.Component {
    render(){
        return(
            // code ici sur le composant
            <View style={styles.vuePrincipal}>
                <Text style={styles.titre}>Choix du profile</Text>
                <Personnage/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    vuePrincipal:{
        flex: 1,
        backgroundColor: "red",
        paddingLeft: 20,
        paddingRight: 20
    },

    titre: {
        marginTop: 50,
        marginBottom: 50,
        textAlign: "center",
        fontSize: 30,
    },
});

export default Log 