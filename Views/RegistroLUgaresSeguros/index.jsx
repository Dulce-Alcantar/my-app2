import React from "react";

import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Button from "../../Components/Button";
import ButtonImage from "../../Components/ButtonImage";

import MyTextInput from "../../Components/TextInput";

import {actions, initialState, reducer} from "./reducer"
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { render } from "react-dom";

const RegistroLugares = ({navigation}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

const changePlaceProperties = (property, text) => {
    dispatch({type: actions.CHANGE_VALUE, name: property, payload: text});
};

const savePlace = async () => {
    try {
        dispatch({type: actions.SAVE_PLACE});
        await axios.post(
            'https://64505e8ea322196911495d51.mockapi.io/api/places',
        state.place
        );
        dispatch({type: actions.SAVE_PLACE_SUCCESS});
    } catch (error) {
        dispatch({type: actions.SAVE_PLACE_ERROR});
    }
};

const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1,
    });
    //console.log(result);
    if (!result.canceled) {
        alert("Imagen seleccionada correctamente");    
      changePlaceProperties("image", result.uri);
    }
    else {
        alert("Imagen no seleccionada");
    }
  };



React.useEffect(() => {
    if(state.isSuccess) {
        alert("Lugar registrado correctamente");
        dispatch({type: actions.RESTART_FORM});
        navigation.navigate("Vista de Lugares");

}
if(state.isError){
    alert("Error al registrar el lugar");
   /* dispatch({type: actions.RESTART_FORM});*/
}
}, [state.isError, state.isSuccess]);


    return (
        <ScrollView style={styles.container}>
        <Text style={styles.title}>Registrar Lugar</Text>
        <MyTextInput 
        label="Nombre"
        value={state.place.name}
        setValue={text => changePlaceProperties("name", text)}
        errorMsg={state.errors.name}
        />
        <MyTextInput
        label="Descripción" 
        value={state.place.description} 
        setValue={text => changePlaceProperties("description", text)} 
        errorMsg={state.errors.description}
        />
        <MyTextInput 
        label="Estado"
        value={state.place.address_state}
        setValue={text => changePlaceProperties("address_state", text)}
        errorMsg={state.errors.address_state}
        />
        <MyTextInput
        label="Ciudad" 
        value={state.place.address_city} 
        setValue={text => changePlaceProperties("address_city", text)} 
        errorMsg={state.errors.address_city}
        />
        <MyTextInput
        label="Colonia"
        value={state.place.address_colony}
        setValue={text => changePlaceProperties("address_colony", text)}
        errorMsg={state.errors.address_colony}
        />
        <MyTextInput 
        label="Calle"
        value={state.place.address_street}
        setValue={text => changePlaceProperties("address_street", text)}
        errorMsg={state.errors.address_street}
        />
        <MyTextInput 
        label="Codigo Postal"
        value={state.place.address_zipcode}
        setValue={text => changePlaceProperties("address_zipcode", text)}
        errorMsg={state.errors.address_zipcode}
        />
 
        <Button  text="Seleccionar imagen" onClick={pickImage} />
        {state.place.image && <Image source={{uri: state.place.image}} style={{width: 50, height: 50}}/>}
        <Button text={state.isLoading ? 'Cargando...' : 'Registrar Lugar'} onClick={savePlace}/>    
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#242038",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: 10,

    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        paddingLeft: 100,
        color: "#F9C22E",
    },

    render() {
        let { result } = this.state;
        let imageUri = result ? `data:image/jpg;base64,${result.base64}` : null;
        imageUri && console.log({uri: imageUri.slice(0, 50)});

        console.log(imageUri.slice(0,50), 'dulce');
        return (
            <View style={styles.container}>
            <Button onPress={this.pickImage} title="Open Picker" />
            {result
            ? <Image
                source={{uri: imageUri}}
                style={{ width: 200, height: 200 }}
                />
            : null}
            {result
            ? <Text style={styles.paragraph}>
                Keys on result:
                {' '}
                {JSON.stringify(Object.keys(result))}
                </Text>
            : null}
        </View>
        );

    }

});

export default RegistroLugares;