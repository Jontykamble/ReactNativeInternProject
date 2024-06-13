import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PizzaScreen from './screens/PizzaScreen';
import Pizza from './screens/Pizza';
import CartScreen from './screens/CartScreen';
import OrderData from './screens/OrderData';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    
    //Bottom tab navigation
    const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <NavigationContainer>

      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={Home} component={HomeScreen} />
        <Tab.Screen name={Cart} component={CartScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Pizza" component={PizzaScreen} options={{headerShown:false}}/>
      <Stack.Screen name="PizzaMania" component={Pizza} options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Order" component={OrderData} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})