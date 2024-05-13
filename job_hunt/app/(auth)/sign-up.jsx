import { View, Text, ScrollView, Image } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
    const [formDetails, setFormDetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {
        setIsSubmitting(true)
    }
    

  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <View className="w-full min-h-[85vh] justify-center px-4 my-6">
                <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode='contain' />
                <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">Start with Aora</Text>
                <CustomInput
                title="Username"
                value={formDetails.username}
                handleChange={(e) => setFormDetails({...formDetails, username: e})}
                otherStyles="mt-10"
                />
                <CustomInput
                title="Email"
                value={formDetails.email}
                handleChange={(e) => setFormDetails({...formDetails, email: e})}
                otherStyles="mt-7"
                keyboardType="email-address"
                />
                <CustomInput
                title="Password"
                value={formDetails.password}
                handleChangeText={(e) => setFormDetails({...formDetails, password: e})}
                otherStyles="mt-7"
                />
                <CustomButton 
                title="Sign Up"
                handlePress={submit}
                containerStyles="mt-7"
                isLoading={isSubmitting}
                />

                <View className="justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-100 font-pregular">Already have an account?</Text>
                    <Link href="/sign-in" className='text-lg font-psemibold text-secondary-100'>Sign In</Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp