import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Home from "./screens/home/home.js";
import ToDo from "./screens/todo/todo.js";

import store from "./redux/store";

import {Provider} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator  screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Todo" component={ToDo} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    height:"60%",
    width:"90%",
    backgroundColor:"#FEFEFE",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center"
  },
  footer:{
    width:"90%",
    height:"30%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"baseline"
  }
});
