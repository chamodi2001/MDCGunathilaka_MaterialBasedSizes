import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity,ImageBackground, Linking } from 'react-native';
import {styleslogin} from '../login/Loginstyles';
import {stylespaypal} from '../payment/Paypalstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Image } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { BASE_URL } from '../config';

const Paypal=()=> {
    
    const navigateTo = useNavigation(); 

    const route = useRoute(); //getting/ recieving the data from the all material pages 
    const {stock} = route.params; //parameters

    const handlePress = () => {

      //paypal link
        const url = 'https://www.sandbox.paypal.com/ncp/payment/RSJ68MHCNPY5E';
        Linking.openURL(url);

        //when click on the buy button , reduce the stock by one
        console.log("Stock is: ",stock); //see the curent stock on consolelog
        //reduce the stock
        const newStock=stock-1;
        console.log("Updated is: ",newStock);
        //
        // navigateTo.dispatch(
        //     CommonActions.reset({
        //       index: 0,
        //       routes: [
        //       { name: 'Userfeedback'},
        //       ],
        //     })
        //   );
        navigateTo.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { 
                name: 'Userfeedback', 
                params: { newStock: newStock } 
              },
            ],
          })
        );
    }

    return (
        <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Text style={styleslogin.title}>Payment</Text>

        {/* <Image source={require('../../public/images/payment/Polyesterqr.png')} style={{width: 200, height: 200}} /> */}
        <TouchableOpacity onPress={handlePress}>
          <Image source={require('../../public/images/payment/Polyesterqr.png')} style={{width: 200, height: 200}} />
        </TouchableOpacity>

        <TouchableOpacity  style={styles.button} onPress={handlePress}>
           <Text style={stylespaypal.buy}>Buy</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    );
    };

export default Paypal;