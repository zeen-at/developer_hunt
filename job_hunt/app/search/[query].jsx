import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import useAppWrite from '../../lib/useAppwrite';
import { searchPosts } from '../../lib/appwrite';
import SearchInput from '../../components/SearchInput';
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';

const Search = () => {
    const { query } = useLocalSearchParams();
    const { data:posts, refetch } = useAppWrite(() => searchPosts(query));

    useEffect(() => {
        refetch();
    }, [query])
  return (
    <SafeAreaView className="bg-primary h-full">
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
          <VideoCard video={item} />
      )}
      ListHeaderComponent={() => (
        <View className="my-6 px-4 ">
            <Text className='font-pmedium text-sm text-gray-100'>
                Search Results
            </Text>
            <Text className='font-pmedium text-2xl text-white'>
                {query}
            </Text>

            <View className='mt-6 mb-8'>
                <SearchInput initialQuery={query} />
            </View>
          
         
        </View>
      )}
      ListEmptyComponent={() => (
        <EmptyState
          title="No Videos Found"
          subtitle="No videos found for this search"
        />
      )}
     
    />
  </SafeAreaView>
  )
}

export default Search