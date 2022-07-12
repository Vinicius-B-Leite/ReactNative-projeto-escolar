import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculadora from './src/telas/Calculadora/index';
import MediaAluno from './src/telas/media/index';
import TelaPrincipal from './src/telas/Main/index';
import Login from './src/telas/login/index';
import Area from './src/telas/area/index';




const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Principal'
          component={TelaPrincipal}
          options={{title: 'Menu', 
        }}
        />
        <Stack.Screen
          name="Calculadora"
          component={Calculadora}
          options={{ 
            title: 'Calculadora',
            headerTitleAlign: 'center', }}
        />  
        <Stack.Screen
          name="MediaAluno"
          component={MediaAluno}
          options={{ title: 'Média Aluno'}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login'}}
        />
        <Stack.Screen
          name="Area"
          component={Area}
          options={{ title: 'Area'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
