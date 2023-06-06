import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonImage(onClick, text) {
    return (
    <TouchableOpacity onPress={onClick}>
    <View style={styles.buttonPicker}>
            <Text style={styles.text}>{text}</Text>
    </View>
    </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    buttonPicker: {
        backgroundColor: "#C62E65",
        padding: 10,
        alignItems: "center",
        borderRadius: 8,
        marginBottom: 10,
    },
    text: {
        fontWeight: "bold",
        color: "#000",
    },
});