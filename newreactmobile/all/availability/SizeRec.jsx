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
import { BASE_URL } from '../config';


const SizeRec=()=>{ //.using the rote prpoty u can access the data,
    // passed from the 'polyesterScrenn' pagee
    const navigateTo = useNavigation();

    const [chestWidth, setChestWidth] = useState(null);
    const [ukSize, setUkSize] = useState(null);

    const route = useRoute(); //getting/ recieving the data from the all material pages 
    const {  itemid, price, stock} = route.params; //parameters 
    const { screenName } = route.params;
    const { newStock } = route.params;


    const handleSubmit = async (event) => {
        event.preventDefault();

        //reduce the stock
        if (stock<=0){
            Alert.alert('Sorry', 'Sold out' );
        }
        else{
            //navigate user to the paypal screen
            navigateTo.navigate('Paypal',{ stock: stock }); 
        }
              
    
    };

        useEffect(() => {
            if (screenName === 'PolyesterScreen') {
                // Fetch data for polyester
                // from asyncStorage get the username of the ogged in user
                AsyncStorage.getItem('loginusername')
                //then using the 'username' argument, check if it exists. 
                .then(username => { 
                    if (username) {
                        //getting that logged in user
                    axios.get(`${BASE_URL}/polyester/chestwidth/${username}`)
                        .then(output => {
                        setChestWidth(output.data); // update the state value of the logged in user's chest width
                        //Recomemding a uk size
                        axios.get(`${BASE_URL}/polyester/recommend/${output.data}`)
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
            } else if (screenName === 'CottonScreennew') {
                AsyncStorage.getItem('loginusername')
                //then using the 'username' argument, check if it exists. 
                .then(username => { 
                    if (username) {
                        //getting that logged in user
                    axios.get(`${BASE_URL}/cotton/chestwidth/${username}`)
                        .then(output => {
                        setChestWidth(output.data); // update the state value of the logged in user's chest width
                        //Recomemding a uk size
                        axios.get(`${BASE_URL}/cotton/recommend/${output.data}`)
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
            }else if (screenName === 'Spandexblend') {
                AsyncStorage.getItem('loginusername')
                //then using the 'username' argument, check if it exists. 
                .then(username => { 
                    if (username) {
                        //getting that logged in user
                    axios.get(`${BASE_URL}/spandexblend/chestwidth/${username}`)
                        .then(output => {
                        setChestWidth(output.data); // update the state value of the logged in user's chest width
                        //Recomemding a uk size
                        axios.get(`${BASE_URL}/spandexblend/recommend/${output.data}`)
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
            }
        }, [screenName]); // Add screenName as a dependency to the useEffect hook
            



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

            <Text style={stylesSizeRec.title}>Price: {price} USD</Text>

            {/* <Text style={styles.chestWidth}>Old Stock: {stock}</Text>
            <Text style={stylesSizeRec.title}>New Stock: {newStock}</Text> */}
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