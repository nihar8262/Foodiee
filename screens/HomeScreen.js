import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    AntDesign,
    Ionicons,
    Feather
  } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { themeColors } from '../theme';
import Categories from '../components/categories';
import { featured } from '../constants';
import FeaturedRow from '../components/featuredRow';
import { getFeturedRestaurants } from '../api';

export default function HomeScreen() {

    const [featuredRestaurant,setFeaturedRestaurant]=useState([]);

    useEffect(()=>{
        getFeturedRestaurants().then(data=>{
            setFeaturedRestaurant(data);
        })
    },[])
  return (
    <SafeAreaView className="bg-white">
        <StatusBar style='dark-content'/>
        {/* search bar */}

        <View className="flex-row items-center space-x-2 px-4 pb-2 mt-3">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
              <AntDesign name="search1" size={24} color="black" />
              <TextInput placeholder='Restraunts' className="ml-2 flex-1"/>
              <View className="flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300">
              <Ionicons name="md-location-sharp" size={24} color="gray" />
              <Text className="text-gray-600">Patna</Text>
              </View>
            </View>
            <View style={{backgroundColor:themeColors.bgColor(1)}} className="p-3  rounded-full">
                 <Feather name="sliders" size={24} color="white" />
            </View>
        </View>

        {/* Main */}
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:80
        }}
        >
            {/* categories */}
            <Categories/>

            {/* fearured */}
            <View className="mt-5">
                {
                    featuredRestaurant.map((items,index)=>{
                        return(
                            <FeaturedRow
                              key={index}
                              title={items.name}
                              restraunts={items.restaurants}
                              description={items.description}
                              />
                        )
                    })
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}