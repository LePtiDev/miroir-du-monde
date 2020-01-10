import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Button} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { AuthSession } from 'expo';

class Log extends React.Component {

    constructor(props){
        super(props)
        state = {
            personnage : [
                id = 1,
                name = "paul", 
                sexe = "Femelle", 
                caracteristique = "Eau", 
                picture = require("../img/nain.png")
            ] 
        }
        this.personnage = [
            {id: 1, name: "paul", sexe: "Femelle", caracteristique: "Eau", picture: require("../img/nain.png")},
            {id: 1, name: "paul", sexe: "Femelle", caracteristique: "Eau", picture: require("../img/nain.png")},
        ]

    }

    storeData = async () => {
        try {
    
          await AsyncStorage.setItem('prenom', 'Elfe')
    
          this.setState({
            item : await AsyncStorage.getItem('prenom'),
          })
  
        } catch (e) {
          console.log(error)
        }
      };
    
    render(){

        console.log(this.personnage.picture)

        return(
            // code ici sur le composant
            <ScrollView style={styles.vuePrincipal}>
                <Button style={styles.bouton} title="New" ></Button>
                <Text style={styles.titre}>Choix du profile</Text>
                <View>
                    <FlatList
                        data={this.personnage}
                        renderItem={({item}) => 
                        <TouchableOpacity
                            style= {styles.carrer}
                            keyExtractor={(item) => item.id.toString()}
                            onPress={() => this.props.navigation.navigate("Sex")}
                        >
                            <View style={styles.container}>
                                <View style={styles.left}>
                                    <Image style={{width : 85, height : 100}} source={item.picture}/>
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.nom}>{item.name}</Text>
                                    <Text>sexe : {item.sexe}</Text>
                                    <Text>Caractéristique : {item.caracteristique}</Text>
                                </View>
                            </View>
                            <View style={styles.separateur}></View>
                        </TouchableOpacity>
                        }
                    />
                </View>
            </ScrollView>
        )
    }
}

var styles = StyleSheet.create({

    bouton: {
        marginTop: 20,
    },

    new:{
        position: "absolute",
        bottom: 40,
        right: 20,
        height: 70,
        width: 70,
        backgroundColor: "rgba(0, 0, 255, 0.26)",
        borderRadius: 35,
    },

    separateur: {
        height: 2,
        width: 300,
        backgroundColor: "grey"
    },

    nom: {
        fontSize: 20,
    },

    left:{
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    right: {
        padding: 20,
        flex: 2,
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
        padding: 15,
    },

    carrer: {
        height: 150,
        margin: "auto",
        margin: 35,
    },
});

export default Log 