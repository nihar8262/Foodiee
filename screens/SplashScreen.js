import { View, Text, Image, StyleSheet ,Dimensions, TouchableOpacity} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import foodiee from "../assets/images/foodie.jpg"
import tw from "twrnc";

const { width, height } = Dimensions.get("window");

export default function SplashScreen () {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigate.replace("onboarding");
    }, 2000);
  }, []);
  return (
    <View className ={"flex-1 flex justify-center items-center"}>
            {/* Background Image */}
            <Image 
              source={require('../assets/images/foodie.jpg')}
              style={tw`h-full w-full absolute `}
            />

            
            <View style={tw`p-5  h-full w-full  py-8 bg-black/20`}>
                <View style={tw`mt-80 `}>
                    <Text className={" font-black text-[100px] border-b-2 text-neutral-900"}>FOODIE</Text>
                    <Text className={"text-right font-bold"} >Your Favourite Food is Here!</Text>
                </View>
            </View>
          </View>
    
  );
};



