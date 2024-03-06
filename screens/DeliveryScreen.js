import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'
import { featured } from '../constants'
import { themeColors } from '../theme';
import { FontAwesome ,Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restarauntSlice';
import { emptyCart } from '../slices/cartSlice';

export default function DeliveryScreen() {
    const naviagtion = useNavigation();
    const restaraunt = useSelector(selectRestaurant);
    const dispatch = useDispatch();

    const cancelOrder = () =>{
        naviagtion.navigate('Cancel');
        dispatch(emptyCart());
    }
  return (
    <View className="flex-1">
      {/* map view */}
      <MapView 
         initialRegion={{
            latitude:restaraunt.lat,
            longitude:restaraunt.lng,
            latitudeDelta:0.01,
            longitudeDelta:0.01
         }}
         className="flex-1"
         mapType='hybrid'
         >
            <Marker 
                coordinate={{
                    latitude:restaraunt.lat,
                    longitude:restaraunt.lng,
                }}
                title={restaraunt.name}
                description={restaraunt.description}
                pinColor={themeColors.bgColor(1)}
                />
         </MapView>
         <View className="rounded-t-3xl -mt-12 bg-white relative">
            <View className="flex-row justify-between px-5 pt-10">
                <View>
                    <Text className="text-lg text-gray-700 font-semibold">
                        Estimated Arrival
                    </Text>
                    <Text className="text-3xl font-extrabold text-gray-700">
                        20-30 Minutes
                    </Text>
                    <Text className="text-lg text-gray-700 font-semibold">
                        Your order  on its way!
                    </Text>
                </View>
                <Image className="w-24 h-24" source={require('../assets/images/bikeGuy2.gif')}/>
                
            </View>
            <View 
               style={{backgroundColor:themeColors.bgColor(0.8)}}
               className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
                <View className="p-1 rounded-full"
                    style={{backgroundColor:'rgba(255,255,255,0.8)'}}>
                        <Image className="h-16 w-16 rounded-full"
                          source={require('../assets/images/deliveryGuy.jpg')}/>
                    </View>
                    <View className="flex-1 ml-3">
                        <Text className="text-lg font-bold text-white">
                            Nihar Chandra
                        </Text>
                        <Text className=" font-semibold text-white">
                            Your Rider
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                        <Entypo name="phone" size={24} color={themeColors.bgColor(0.8)} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={cancelOrder}
                         className="bg-white p-1 rounded-full">
                        <Entypo name="cross" size={29} color="red" />
                        </TouchableOpacity>
                    </View>
               </View>
         </View>
    </View>
  )
}