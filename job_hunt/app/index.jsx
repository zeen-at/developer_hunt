import {  StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { Status, StatusBar } from "expo-status-bar"
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Image } from 'react-native'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'


const Index = () => {
  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full items-center h-full justify-center px-4">
            <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />
            <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain' />
            <View className="relative mt-5">
                <Text className="text-3xl text-white font-bold text-center ">Discover Endless Possibilities with {''}
                <Text className="text-secondary-200">Aora</Text>
                </Text>
                {/* <Image resizeMode='contain' source={images.path} className="absolute h-[15px] w-[136px] -bottom-2 -right-8" /> */}
            </View>
            <Text className=" text-sm font-pregular text-gray-100 mt-7 text-center">Where Creativity Meets Innovation:
                Embark on a journey of limitless exploration with Aora
            </Text>
            <CustomButton
             title="Continue with Email" 
             handlePress={() => {router.push('/sign-in')}}
             containerStyles="w-full mt-7"
             />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  )
}

export default Index

