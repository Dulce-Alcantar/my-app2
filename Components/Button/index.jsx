import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function Button({ onClick, text }){
    return (
    <TouchableOpacity onPress={onClick}>
        <View style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
button: {
    backgroundColor: "#F9C22E",
    padding: 10,
    alignItems: "center",
    
    borderRadius: 8,    
    marginBottom: 10,
   
},
text: {
    fontWeight: "bold",
    color: "#ffffff",
},
});