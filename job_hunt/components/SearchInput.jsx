import { View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { router, usePathname } from 'expo-router'


const SearchInput = ({ initialQuery })  => {
    const pathname = usePathname();
    const [query, setQuery] = useState(initialQuery || '');
  return (
    
        <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl space-x-4 focus:border-secondary-200 items-center flex-row">
            <TextInput
            className="flex-1 text-white font-pregular mt-0.5 text-base"
            value={query}
            placeholder='Search for a video content'
            onChangeText={(e) => setQuery(e)}
            placeholderTextColor='#CDCDE0'
            />

            <TouchableOpacity
            onPress={() => {
                if(!query){
                    return Alert.alert('Missing Query', "Input search query")
                }
                if(pathname.startsWith('/search'))
                    router.setParams({query})
              
                  else  router.push(`/search/${query}`)
                
            }}
            >
                <Image source={icons.search} resizeMode="contain" className="w-5 h-5" />
            </TouchableOpacity>
        </View>
  )
}

export default SearchInput;