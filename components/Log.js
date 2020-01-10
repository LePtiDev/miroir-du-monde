import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Button} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import { AuthSession } from 'expo';

class Log extends React.Component {

    constructor(props){
        super(props)
        this.personnage = [
            {id: 1, name: "paul", sexe: "Femelle", caracteristique: "Eau", picture: require("../img/nain.png")},
            {id: 2, name: "jack", sexe: "Male", caracteristique: "Terre", picture: require("../img/nain.png")},
        ]
    }

    render(){

        return(
            // code ici sur le composant
            <ScrollView>
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
                <TouchableOpacity style={styles.bouton} onPress={() => this.props.navigation.navigate("Sex")}>
                    <Text style={{fontSize: 20, color: "white"}}>Nouveau Profil</Text>
                </TouchableOpacity>
                <View style={styles.vuePrincipal}>
                    <FlatList
                        data={this.personnage}
                        renderItem={({item}) => 
                        <TouchableOpacity
                            style= {styles.carrer}
                            keyExtractor={(item) => item.name.toString()}
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
        textAlign: "center",
        marginTop: 40,
        paddingTop: 20,
        paddingBottom: 20,
        marginLeft: 90,
        marginRight: 90,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 20,
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
        paddingRight: 20,
        paddingTop: 30,
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