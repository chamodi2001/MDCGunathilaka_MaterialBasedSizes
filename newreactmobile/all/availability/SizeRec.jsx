import React,{useState,useEffect} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity, ImageBackground } from 'react-native';
import { stylessize } from '../usersize/Entersizestyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { stylesSizeRec } from './SizeRecstyles';
import { styleslogin } from '../login/Loginstyles';
import { stylesmaterial } from '../selectcloths/Materialstyles';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SizeRec=()=>{ //.using the rote prpoty u can access the data,
    // passed from the 'polyesterScrenn' pagee
    const navigateTo = useNavigation();

    const [chestWidth, setChestWidth] = useState(null);
    const [ukSize, setUkSize] = useState(null);

    const route = useRoute(); //getting/ recieving the data from the all material pages 
    const {  itemid, price, stock} = route.params; //parameters 
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        //navigate user to the paypal screen
        navigateTo.navigate('Paypal');    
    };

        useEffect(() => {
            // from asyncStorage get the username of the ogged in user
            AsyncStorage.getItem('loginusername')
            //then using the 'username' argument, check if it exists. 
            .then(username => { 
                if (username) {
                axios.get(`http://192.168.1.59:8080/polyester/chestwidth/${username}`)
                    .then(output => {
                    setChestWidth(output.data); // update the state value of user's chest wodth
                    //Recomemding a uk size
                    axios.get(`http://192.168.1.59:8080/polyester/recommend/${output.data}`)
                        .then(output => {
                        setUkSize(output.data);
                        })
                        .catch(error => {
                        console.error('No enough data to recomend a size', error);
                        });
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

            {/* inside a new container view displaying the current logged in user's chest with */}
            <View style={stylesmaterial.subcontainer}>
                {chestWidth && <Text style={styles.chestWidth}> (Chest Width: {chestWidth})</Text>}

                {/* displaying the recommended uk size for thatt user */}
                {ukSize && <Text style={stylesSizeRec.rec}>UK Size: {ukSize}</Text>}
            </View>
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