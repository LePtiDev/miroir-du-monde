import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, SectionList, ScrollView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

class Log extends React.Component {

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
            <ScrollView style={styles.vuePrincipal}>
                <Text style={styles.titre}>Choix du profile</Text>
                <View>
                    <FlatList
                        data={this.personnage}
                        renderItem={({item}) => 
                        <TouchableOpacity
                            key = {this.personnage.id}
                            name = {this.personnage.name}
                            style= {styles.carrer}
                            onPress={() => this.props.navigation.navigate("Sex")}
                        >
                            <View style={styles.container}>
                                <View style={styles.left}>
                                    <View styles={styles.pictures}></View>
                                </View>
                                <View style={styles.right}></View>
                            </View>
                            <Text>{this.name}</Text>
                        </TouchableOpacity>}
                    />
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({


    pictures: {
        height: 50,
        width: 50,
        backgroundColor: "yellow"
    },  

    left:{
        flex: 1,
        backgroundColor: "red"
        
    },

    right: {
        flex: 2,
        backgroundColor: "green"
    },

    vuePrincipal:{
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },

    titre: {
        marginTop: 50,
        marginBottom: 50,
        textAlign: "center",
        fontSize: 30,
    },

    container: {
        flex: 1,
        flexDirection: "row",
    },

    carrer: {
        height: 150,
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: "blue",
        marginBottom: 40,
    },
});

export default Log 