import React,{useEffect} from 'react';
import { Text, View, ImageBackground } from 'react-native';
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
        <ImageBackground source={require('../../public/images/background/load4.jpg')} style={{width: '100%', height: '100%'}}> 
        <View styles={stylesloading.containerx}>
            <Text style={stylesloading.appname}>Size Recommending Appication</Text>
            <Text style={stylesloading.text}>Loading...</Text>
        </View>
        </ImageBackground>
    );
};
export default Loading;