import axios from "axios";
import React from "react";

import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

import {actions, initialState, reducer} from "./reducer";

import {useIsFocused} from "@react-navigation/native"

export default function VistaLugares({navigation}) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const isFocused = useIsFocused();

    const getPlaces = async () => {        
        try {
            dispatch({type: actions.GET_PLACES});
            const {data} = await axios.get(
                'https://64505e8ea322196911495d51.mockapi.io/api/places',
                );               
                dispatch({type: actions.GET_PLACES_SUCCESS, payload: data});
            } catch (error) {
                dispatch({
                type: actions.GET_PLACES_ERROR, 
                payload: "Error al obtener los lugares"
            });
        }
        };

        React.useEffect(() => {
        /*    const unsubscribe = navigation.addListener("focus", () => {
                getPlaces();
                });

                return unsubscribe; */
                if(isFocused) {
                    getPlaces();
                    }
        }, [isFocused]);

        if(state.isLoading) {
            return (
                <View style={styles.load}>
                    <Text style={styles.textLoad}>Cargando...</Text>
                </View>
                );
                }
                
    return (
        <ScrollView
         style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("Registro de Lugares")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Registrar Lugar</Text>
                </View>
            </TouchableOpacity>
            {state.places.map((place, idx) => (
                    <View style={styles.place} key={idx}> 
                    <Text style ={styles.title}>
                        {place.name ? place.name : "Sin nombre" }</Text>
                <Image source={{uri: place.image}} style={{width: 280, height: 280}}/>
                    <Text style={styles.description}>{place.description ? place.description : "Sin descripción" }</Text>
                    </View>
                ))}
        </ScrollView>
        );
    }

    const styles = StyleSheet.create({
        place: {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            borderColor: "#919191",
            borderRadius: 15,
            borderWidth: 1,
            paddingHorizontal: 5,
            paddingVertical: 50,
            marginBottom: 10,
            backgroundColor: "#4D5057",
        },
        title: {
            color: "#F9C22E",
            fontWeight: "bold",
            letterSpacing: 2,
            fontSize: 32,
        },
        container: {
            backgroundColor: "#242038",
            display: "flex",
            flexDirection: "column",
            padding: 20,
        },
        button: {
            backgroundColor: "#F9C22E",
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
            marginBottom: 10,
            },
            buttonText: {
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
                },

        description: {
        color: "#fff",
        fontSize: 18,
        },
        load: {
            flex: 1,
            backgroundColor: "#202438",
            alignItems: "center",
        },
        textLoad: {
            color: "#fff",
            fontSize: 18,
            },

        });
