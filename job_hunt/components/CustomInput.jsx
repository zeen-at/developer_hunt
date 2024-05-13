import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { icons } from "../constants";

const CustomInput = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  ...props
}) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={` ${otherStyles} space-y-2`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-200 items-center flex-row">
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          className="flex-1 text-white font-psemibold text-base"
        />
        {title === 'Password' ? (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={showPassword ? icons.eye : icons.eyeHide}  className="w-6 h-6" resizeMode="contain" />
            </TouchableOpacity>
        ): ""}
      </View>
    </View>
  );
};

export default CustomInput;
