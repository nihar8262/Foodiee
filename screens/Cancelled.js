import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from "../theme";
import { useNavigation } from '@react-navigation/native'

export default function Cancelled() {
   const  navigation  = useNavigation();
  return (
    <View className={"flex-1 items-center justify-center"}>
        <Image 
      source={require('../assets/images/tick.png')}
      className={"w-80 h-80 "}
    />
      <Text className={"font-bold text-3xl text-center text-green-700"} >Your order has been cancelled successfully</Text>
      <Text  className={"text-center p-4 "} >But don't sleep with empty stomach, eat something .You can order something else because we can deliver your favourite food.  </Text>

      <View className={"flex flex-row flex-wrap gap-5 pt-2 items-center  justify-center"}>
        <Image  className={"w-28 h-28 rounded-full"}
         source={require('../assets/images/pizza.png') }
        />
        <Image  className={"w-28 h-28 rounded-full"}
         source={require('../assets/images/pizzaDish.png') }
        />
        <Image  className={"w-28 h-28 rounded-full"}
         source={require('../assets/images/burger.jpeg') }
        />
        <Image  className={"w-28 h-28 rounded-full"}
         source={require('../assets/images/noodles.jpeg') }
        />
        <Image  className={"w-28 h-28 rounded-full"}
         source={require('../assets/images/pizza1.jpg') }
        />
        <Image  className={"w-28 h-28 rounded-full"}
         source={require('../assets/images/kfc.jpg') }
        />
      </View>

      <View className={" flex-row gap-10 pt-5"}>
        <TouchableOpacity 
              onPress={()=>navigation.navigate('Home')}
              style={{backgroundColor:themeColors.bgColor(1)}}
              className="p-3 rounded-full "
              >
                <Text className="text-white text-center font-bold text-lg">
                    Go to Home
                </Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}