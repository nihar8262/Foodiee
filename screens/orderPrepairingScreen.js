import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme';

export default function OrderPrepairingScreen() {
    const naviagtion = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            //  move to delivery screen
            naviagtion.navigate('Delivery');
        },3000)
    })
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80"/>
      <Text className="font-bold mt-5 text-lg"style={{ color: themeColors.text }} >Your order is being Processed...</Text>
    </View>
  )
}