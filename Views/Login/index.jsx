import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../Components/Button';


export default function Login({ navigation }) {
    return (
        <View>
            <Button 
            text="Registrar Lugares" 
            onClick={()=> navigation.navigate('RegistroLugares')}
            />
        </View>
    );
};