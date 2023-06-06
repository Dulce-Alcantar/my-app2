import React from "react";

import {TextInput, StyleSheet, View, Text} from 'react-native';

const MyTextInput = ({label = "", value, setValue, errorMsg = {status: false, text: ''} }) => {
    return (

<View>
    <Text style = {styles.label}>{label}</Text>
<TextInput 
value={value} 
style={styles.container} 
onChangeText={text => setValue(text) } 
/>
{ errorMsg.status && <Text style = {styles.errorMsg}>{errorMsg.text}</Text> }
</View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 12,
        marginBottom: 10,
    },
    label: {
        fontWeight: 800 ,
        fontSize: 14,
        color: '#F9C22E',
        marginBottom: 2,

    },
    errorMsg: {
        fontWeight: 800 ,
        fontSize: 14,
        color: '#9E0031'

    },
})

export default MyTextInput;