import { StyleSheet, SafeAreaView } from 'react-native';

import RegistroLUgaresSeguros from './Views/RegistroLUgaresSeguros';
import VistaLugares from './Views/VistaLugares';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const StackDeNavegacion = createNativeStackNavigator();



export default function App() {
  return ( 
    <SafeAreaView style={styles.container}>
    <NavigationContainer >
    <StackDeNavegacion.Navigator 
    initialRouteName='Vista de Lugares'
    screenOptions={{
      headerStyle:{
        backgroundColor:'#242039',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
          fontWeight:'bold',
          },
          }}
    > 
    <StackDeNavegacion.Screen
    name ='Vista de Lugares'
    component={VistaLugares}
/>
<StackDeNavegacion.Screen
    name="Registro de Lugares" 
    component={RegistroLUgaresSeguros}
/>
    </StackDeNavegacion.Navigator>
    </NavigationContainer>
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242038',
  },
});

/*<StackDeNavegacion.Screen
name="RegistroLugares" 
component={RegistroLUgaresSeguros}
/> */

/*<StackDeNavegacion.Screen 
name='Vista de Lugares' 
component={VistaLugares}
/>*/