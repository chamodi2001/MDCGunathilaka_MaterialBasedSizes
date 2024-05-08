import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../register/Registerstyles';
import { styleslogin } from '../login/Loginstyles';

import { useNavigation } from '@react-navigation/native';


const Soldout=()=>{ 
    const navigateTo = useNavigation();
    
    const handleSubmit =() => {
        // event.preventDefault();

        navigateTo.navigate('Bottomstack');
           
    
    };
  

    return(
        //full image background
        <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Text style={styleslogin.titlesold}>Sold Out,Sorry!</Text>

            {/* user can buy the item, then have to pay throgh paypal */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};
export default Soldout;