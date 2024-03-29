import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "../constants";
import { themeColors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restarauntSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "../slices/cartSlice";
import { urlFor } from "../sanity";

export default function CartScreen() {
  const restaraunt = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch = useDispatch();  
  const deliveryFee = 2;
  useEffect(()=>{
    const items = cartItems.reduce((group,item)=>{
        if(group[item.id]){
            group[item.id].push(items);
        }else{
            group[item.id] = [item];
        }
        return group;
    },{})
    setGroupedItems(items);
  },[cartItems])


  return (
    <View className="bg-white flex-1 ">
      {/* back button */}
      <View className="relative py-4 shadow-sm ">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-10 left-4"
        >
          <AntDesign name="arrowleft" size={26} color="white" />
        </TouchableOpacity>
        <View className="mt-5">
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{restaraunt.name}</Text>
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {
        Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-3xl "
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} ×
              </Text>
              <Image className="h-14 w-14 rounded-full" source={{uri:urlFor(dish.image).url()}} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">Rs. {dish.price}</Text>
              <TouchableOpacity
                onPress={()=>dispatch(removeFromCart({id: dish._id}))}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <AntDesign name="minus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>

      {/* total */}
      <View className="p-6 px-8 rounded-t-3xl space-y-4" style={{backgroundColor:themeColors.bgColor(0.2)}}>
         <View className="flex-row justify-between">
         <Text className="text-gray-700">Subtotal</Text>
         <Text className="text-gray-700">Rs.{cartTotal}</Text>
         </View>
         <View className="flex-row justify-between">
         <Text className="text-gray-700">Delivery Fee</Text>
         <Text className="text-gray-700">Rs.{deliveryFee}</Text>
         </View>
         <View className="flex-row justify-between">
         <Text className="text-gray-700 font-extrabold">Order Total</Text>
         <Text className="text-gray-700 font-extrabold">Rs.{cartTotal+deliveryFee}</Text>
         </View>
         <View>
            <TouchableOpacity 
              onPress={()=>navigation.navigate('OrderPreparing')}
              style={{backgroundColor:themeColors.bgColor(1)}}
              className="p-3 rounded-full"
              >
                <Text className="text-white text-center font-bold text-lg">
                    Place Order
                </Text>
              </TouchableOpacity>
         </View>
      </View>
    </View>
  );
}
