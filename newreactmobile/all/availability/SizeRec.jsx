import React,{useState,useEffect} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity, ImageBackground } from 'react-native';
import { stylessize } from '../usersize/Entersizestyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesSizeRec } from './SizeRecstyles';
import { styleslogin } from '../login/Loginstyles';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SizeRec=()=>{ //.using the rote prpoty u can access the data,
    // passed from the 'polyesterScrenn' pagee
    const navigateTo = useNavigation();

    const [chestWidth, setChestWidth] = useState(null);


    // const [Uksize, setUksize] = useState(null); // for the bestfitting uk size to dsiplay

    const route = useRoute(); //getting/ recieving the data from the all material pages 
    const {  itemid, price, stock} = route.params; //parameters 
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        //navigate user to the paypal screen
        navigateTo.navigate('Paypal');    
    };


    // useEffect(() => {
    //     axios.get('http://192.168.1.59:8080/pol/chestwidth/{username}')
    //     .then(response => {
    //         setChestWidth(response.data);
    //     })
    //     .catch(error => {
    //         console.error('There was an error!', error);
    //     });
    // }, []);


        //ocalStorage.getItem('loginusername') is used to get the username from local storage. 
        //If a username is found, 
        //a request is made to the backend to get the user's chest width.
        
      useEffect(() => {
        // Get the username from AsyncStorage
        AsyncStorage.getItem('loginusername')
          .then(username => {
            if (username) {
              axios.get(`http://192.168.1.59:8080/pol/chestwidth/${username}`)
                .then(response => {
                  setChestWidth(response.data);
                })
                .catch(error => {
                  console.error('There was an error!', error);
                });
            }
          });
      }, []);

  

    return(
        //full image background
        <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Text style={styles.title}>Recomended Size</Text>
            {chestWidth && <Text style={styles.chestWidth}>Chest Width: {chestWidth}</Text>}

            <Text style={stylesSizeRec.title}>Itemid: {itemid}</Text>

            <Text style={stylesSizeRec.title}>Price: {price} LKR</Text>

            <Text style={stylesSizeRec.title}>Stock: {stock}</Text>


            {/* {Uksize ? <Text>Recommended Euro size: {Uksize}</Text> : <Text>Loading...</Text>} */}

            {/* {Uksize ? <Text>{Uksize}</Text> : <Text>Loading...</Text>} */}

            {/* user can buy the item, then have to pay throgh paypal */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
};
export default SizeRec;