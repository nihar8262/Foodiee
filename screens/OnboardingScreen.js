import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react';
import tw from 'twrnc'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function OnboardingScreen() {
    const navigation = useNavigation();
  return (
    <View style={tw`flex-1 flex justify-end`}>
    {/* Background Image */}
    <Image 
      source={require('../assets/images/res.jpg')}
      style={tw`h-full w-full absolute`}
    />

    {/* content & gradient */}
    <View style={tw`p-5 pb-10  py-8`}>
    <LinearGradient
              colors={['transparent','rgba(0,0,0,1.8)']}
              style={tw`absolute w-100 h-60 mt-10`}
              start={{x:0.5,y:0}}
              end={{x:0.5,y:1}}

              />
        <View style={tw`py-3`}>
            <Text style={tw`text-white font-bold text-4xl`}>Find Your Favourite Restraunt's Food Here!</Text>
            <Text style={tw`text-neutral-200 font-medium`}>
                One of the fastest food delivering App
            </Text>
            <TouchableOpacity 
                onPress={()=>navigation.navigate("Home")}
                style={tw`bg-orange-500 mx-auto p-3 px-12 mt-2 rounded-full`}>
                <Text style={tw`text-white font-bold `}>Let's Order</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  </View>
  )
}