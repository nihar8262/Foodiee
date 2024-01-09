import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { themeColors } from '../theme'
import CartIcon from './cartIcon'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartItemById } from '../slices/cartSlice'
import { urlFor } from '../sanity'

export default function DishRow({item}) {
    const dispatch = useDispatch();
    const totalItems = useSelector(state=> selectCartItemById(state,item._id));

    const handleIncrease = () =>{
        dispatch(addToCart({...item}))
    }
    const handleDecrease=()=>{
        dispatch(removeFromCart({id: item._id}))
    }
  return (
    
    <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl" style={{height:100 , width:100}}
        source={{uri:urlFor(item.image).url()}}/>
      <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-3xl">{item.name}</Text>
            <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
            <Text className="text-gray-700 text-lg font-bold">
            Rs. {item.price}
            </Text>
            <View className="flex-row items-center">
                <TouchableOpacity  onPress={handleDecrease}
                  disabled={!totalItems.length}
                  className="p-1 rounded-full"
                  style={{backgroundColor:themeColors.bgColor(1)}}
                  >
                    <AntDesign name="minus" size={24} color="white" />
                  </TouchableOpacity>

                  <Text className="px-3">
                      {totalItems.length}
                  </Text>

                  <TouchableOpacity onPress={handleIncrease}
                  className="p-1 rounded-full"
                  style={{backgroundColor:themeColors.bgColor(1)}}
                  >
                    <AntDesign name="plus" size={24} color="white" />
                  </TouchableOpacity>
            </View>
        </View>
      </View>  
    </View>
  )
}