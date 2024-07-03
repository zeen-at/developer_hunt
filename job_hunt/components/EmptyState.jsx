import { View, Image, Text } from "react-native";
import { images } from "../constants";
import React from "react";
import CustomButton from "./CustomButton";
import {router} from "expo-router"

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justfy-center items-center px-4">
      <Image
        source={images.empty}
        className="h-[215px] w-[270px]"
        resizeMode="contain"
      />
      <Text className="font-psemibold text-xl text-center mt-2 text-white">
        {title}
      </Text>
      <Text className="font-pmedium text-gray-100 text-sm">{subtitle}</Text>
      <CustomButton
        title="Create Video"
        handlePress={() => router.push("/create")}
        containerStyles='w-full my-5'
      />
    </View>
  );
};

export default EmptyState;
