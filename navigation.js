import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigation} from "@react-navigation/native-stack"

const Stack=createNativeStackNavigation();
import {View,Text} from 'react-native'
import React from "react-native";
import HomeScreen from './screen/HomeScreen'
import CafeScreen from './screen/CafeScreen'
export default function Navigation(){

    return (

       <NavigationContainer>

        <Stack.Navigator >
            <Stack.Screen name="Home"componet={HomeScreen}/>
            <Stack.Screen name="Cafe"componet={CafeScreen}/>
            

        </Stack.Navigator>
       </NavigationContainer>

    )


}