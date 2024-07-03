import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../components/CustomInput";
import { Video } from "expo-av";

const Create = () => {
  const [uploading, setUploading] = useState(false)
  const [form, setForm] = useState({
    videoTitle: '',
    video: null,
    thumbnail: null,
    prompt: ''

  })
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">Upload Video</Text>
        <CustomInput title="Video Title" value={form.videoTitle} handleChangeText={(e) => setForm({...form, title: e})} placeholder="Name your Video" otherStyles='mt-10' />

        <View className='mt-7 space-y-2'>
          <Text className='text-base text-gray-100 font-pmedium'>Upload Video</Text>
          <Pressable>
            {/* {form.video ? (
              <Video /> 
            ): (

            )} */}
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
