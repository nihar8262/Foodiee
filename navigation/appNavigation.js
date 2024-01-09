import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import RestrauntScreen from "../screens/RestrauntScreen";
import CartScreen from "../screens/cartScreen";
import OrderPrepairingScreen from "../screens/orderPrepairingScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
const Stack = createNativeStackNavigator();



export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Restraunt" component={RestrauntScreen}/>
            <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen}/>
            <Stack.Screen name="OrderPreparing" options={{presentation: 'fullScreenModal'}} component={OrderPrepairingScreen}/>
            <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen}/>

            
        </Stack.Navigator>
    </NavigationContainer>
  )
}