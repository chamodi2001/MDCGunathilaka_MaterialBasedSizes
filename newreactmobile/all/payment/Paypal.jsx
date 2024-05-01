import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity,ImageBackground, Linking } from 'react-native';
import {styleslogin} from '../login/Loginstyles';
import {stylespaypal} from '../payment/Paypalstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Image } from 'react-native';

const Paypal=()=> {
    
    const navigateTo = useNavigation(); 

    const handlePress = () => {
        const url = 'https://www.sandbox.paypal.com/ncp/payment/GDGVB768DG5JN';
        Linking.openURL(url);
    }

    return (
        <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Text style={styleslogin.title}>Payment</Text>

        {/* <Image source={require('../../public/images/payment/Polyesterqr.png')} style={{width: 200, height: 200}} /> */}
        <TouchableOpacity onPress={handlePress}>
          <Image source={require('../../public/images/payment/Polyesterqr.png')} style={{width: 200, height: 200}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress}>
           <Text style={stylespaypal.buy}>Pay Here</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    );
    };

export default Paypal;