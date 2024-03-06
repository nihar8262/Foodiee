import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function CancelOrder() {
    const naviagtion = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            //  move to delivery screen
            naviagtion.navigate('Cancelled');
        },3000)
    })
  return (
    <View className={"flex-1 justify-center items-center"} >
        <Image 
      source={require('../assets/images/cancel.png')}
      className={"w-96 h-72 "}
    />
      <Text className="font-bold text-center mt-5 text-lg" style={{ color: themeColors.text }}>We are cancelling  your order ....</Text>
    </View>
  )
}