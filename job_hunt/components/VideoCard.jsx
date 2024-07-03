import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { Video as ExpoVideo, ResizeMode} from 'expo-av'

const VideoCard = ({video: {Title, Thumbnail, Video, users: {avatar, username}}}) => {


    const [play, setPlay] = useState(false)

  return (
    <View className='flex-col items-center px-4 mb-14'>
        <View className='flex-row gap-3 items-start'>
            <View className='justify-center items-center flex-row flex-1'>
                <View className='w-[46px] h-[46px] rounded-lg border border-secondary-200 justify-center items-center p-0.5'>
                    <Image source={{uri: avatar}} resizeMode='cover' className='w-full h-full roumded-lg'/>
                </View>
                <View className='justify-center ml-3 flex-1 gap-y-1'>
                    <Text className='text-white font-psemibold text-sm' numberOfLines={1}>{Title}</Text>
                    <Text className='text-gray-100 font-pregular text-xs' numberOfLines={1}>{username}</Text>
                </View>
            </View>
            <View className='pt-2'>
                <Image source={icons.menu} className='w-5 h-5' resizeMode='contain' />
            </View>
        </View>

        {play ? (
            <ExpoVideo
            source={{ uri: Video }}
            className="w-full h-60 mt-3 rounded-xl"
            resizeMode={ResizeMode.CONTAIN}
            useNativeControls
            shouldPlay
            onPlaybackStatusUpdate={(status) => {
                console.log(status)
              if(status.didJustFinish){
                  setPlay(false);
              }
            }}
          />
        ) : (
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setPlay(true)}
             className='w-full h-60 rounded-xl mt-3 relative justify-center items-center'>
                <Image source={{uri: Thumbnail}} className='w-full h-full rounded-xl mt-3' resizeMode='cover' />
                <Image source={icons.play} className='w-12 h-12 absolute mt-3' resizeMode='contain' />
            </TouchableOpacity>
        )}
    </View>

  )
}

export default VideoCard