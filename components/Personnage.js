import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

//commponents

class Personnage extends React.Component {

    constructor(props){
        super(props)
        this.personnage = [
            {id: 1, name: "perso 1"},
            {id: 2, name: "perso 2"},
            {id: 3, name: "perso 3"},
            {id: 4, name: "perso 4"},
        ]
    }
    render(){
        return(
            // code ici sur le composant
            <View style={styles.container}>
                {this.personnage.map((personnage) => (
                    <TouchableOpacity key={id} style={styles.carrer}></TouchableOpacity>
                ))}
            </View>
        )
    }
}

var styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
    },

    carrer: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        marginBottom: 40,
    },

    left: {
        
    }
});

export default Personnage 


