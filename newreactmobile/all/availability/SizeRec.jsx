import React,{useState} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity, ImageBackground } from 'react-native';
import { stylessize } from '../usersize/Entersizestyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesSizeRec } from './SizeRecstyles';
import { styleslogin } from '../login/Loginstyles';
import { useRoute } from '@react-navigation/native';

const SizeRec=()=>{ //.using the rote prpoty u can access the data,
    // passed from the 'polyesterScrenn' pagee
    const navigateTo = useNavigation();
    const route = useRoute(); //getting/ recieving the data from the all material pages 
    const { itemid, price, stock } = route.params; //parameters received

    const handleSubmit = async (event) => {
        event.preventDefault();
        //navigate user to the paypal screen
        navigateTo.navigate('Paypal');    
    };

    return(
        //full image background
        <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Text style={styles.title}>Recomended Size</Text>
            {/* would display the recommemed size for the user */}
            <Text style={styles.size}>----</Text>
            {/* <TextInput style={styles.input} placeholder="Recomended Size" onChangeText={text => setcw(text)} 
            defaultValue={chestwidth} /> */}
            
            {/* retrieving the itemid with the other attributes from the databse */}
            <Text style={stylesSizeRec.title}>Itemid: {itemid}</Text>

            <Text style={stylesSizeRec.title}>Price: {price} LKR</Text>

            <Text style={stylesSizeRec.title}>Stock: {stock}</Text>

            {/* user can buy the item, then have to pay throgh paypal */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};
export default SizeRec;