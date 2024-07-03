import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../context/GlobalProvider'

const SignIn = () => {
    const [formDetails, setFormDetails] = useState({
        email: "",
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {setUser, setIsLoggedIn} = useGlobalContext();

    const submit = async () => {
        if(!formDetails.email || !formDetails.password){
            Alert.alert('Error', "Fields cannot be empty")
        }

        setIsSubmitting(true)

        try {
         await signIn(formDetails.email, formDetails.password);

         const result = await getCurrentUser()
            setUser(result);
            setIsLoggedIn(true)
            router.replace('/home')
            
        } catch (error) {
            Alert.alert('Error', error.message)
        }finally{
            setIsSubmitting(false)

        }
    }
    

  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView>
            <View className="w-full min-h-[85vh] justify-center px-4 my-6">
                <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode='contain' />
                <Text className="text-white text-2xl text-semibold mt-10 font-psemibold">Log in to Aora</Text>
                <CustomInput
                title="Email"
                value={formDetails.email}
                handleChangeText={(e) => setFormDetails({...formDetails, email: e})}
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
                title="Sign In"
                handlePress={submit}
                containerStyles="mt-7"
                isLoading={isSubmitting}
                />

                <View className="justify-center pt-5 flex-row gap-2">
                    <Text className="text-lg text-gray-100 font-pregular">Don't have an account?</Text>
                    <Link href="/sign-up" className='text-lg font-psemibold text-secondary-100'>Sign Up</Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn