import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {stylesloading} from './Loadingstyles';

const Loading=()=>{
    const navigation = useNavigation(); 

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Register');
        }, 2000); // 3000ms = 3s

        return () => clearTimeout(timer);
    }, [navigation]);

    return(
        <View styles={stylesloading.containerx}>
            <Text style={stylesloading.appname}>SizeRecom App</Text>
            <Text style={stylesloading.text}>Loading...</Text>
        </View>
    );
};
export default Loading;