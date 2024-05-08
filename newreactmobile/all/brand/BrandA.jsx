import React,{useEffect} from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {stylesloading} from '../loading/Loadingstyles';

const BrandA=()=>{
    const navigation = useNavigation(); 

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('HomeStack');
        }, 1500); // 3000ms = 3s

        return () => clearTimeout(timer);
    }, [navigation]);

    return(
        // <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View styles={stylesloading.containerx}>
            <Text style={stylesloading.appname}>Welcome to</Text>
            <Image source={require('../../public/images/tshirt.png')} style={{width: 150, height: 150, marginHorizontal:'30%', marginTop:10}} />
            <Text style={stylesloading.brand}> BrandA </Text>
        </View>
        // </ImageBackground>
    );
};
export default BrandA;