import React, { useState, useEffect } from "react";
import {Alert} from 'react-native'


const useAppWrite = (fn) => {
    
    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    
    
   
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const reponse = await fn();
                setData(reponse);
                
            } catch (error) {
                Alert.alert('Error', error.message)
            }finally{
                setIsLoading(false)
            }
        }

        useEffect(() => {
        fetchData();
    }, []);


    const refetch = () => fetchData();

    return { data, refetch, isLoading }
}

export default useAppWrite;