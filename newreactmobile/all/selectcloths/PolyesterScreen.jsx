import React,{useState,useEffect} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity,Image,ScrollView } from 'react-native';
import { stylescotton } from './Cottonstyles';
import { styles } from '../register/Registerstyles';
import {stylesmaterialwise} from './Materialwisestyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

//saving the path of images 
const PolyesterScreen=()=> {
    const navigateTo = useNavigation(); 

    const [images, setImages] = useState(null);

    useEffect(() => { //will render the pictures fro,m the server to display on the application
        // axios.get('http://192.168.239.125:8080/images/list')
        axios.get('http://192.168.1.59:8080/images/list') //slt
            .then((output) => {
                if (output.data) { //checking whether response/output data is null or 0
                    let images = output.data.map(base64String => 'data:image/png;base64,' + base64String);
                    setImages(images);
                }
            });
    }, []);

    const handleImage = (id) => {
        //according to the rendered images/items id, can transfer the database table info
        // axios.get(`http://192.168.239.125:8080/images/${id}`)
        axios.get(`http://192.168.1.59:8080/images/${id}`) //slt
        .then((output) => {
                 if (output.data) {
                let itemid=output.data.itemid;
                let price = output.data.price;
                let stock = output.data.stock;
                // let material= output.data.material;

                //displays the item id that clicked throgh the console log
                console.log("ITEM INDEX CLICKED: ",id);
                //navigate to the size rec page along with the itemid, price and stock.
                navigateTo.navigate('SizeRec', { itemid:itemid, price: price, stock: stock, screenName: 'PolyesterScreen' }); 
            }
        })
        .catch((error) => {
            console.error(`Error fetching the image with id ${id}: `, error);
        });

        
    };

    return (
        <View>
            <View style={stylescotton.subcontainer}>
                <Text style={stylescotton.title}>Polyester Material</Text>
            </View>
            <ScrollView style={{width: '100%', height: '100%'}}>
            <View style={stylescotton.subcontainerMaterial}>
                <Text style={stylescotton.title}>Polyester </Text>
                {/* <Image source={{ uri: image }} style={{width: 100, height: 100}} /> */}
                
                    {images === null //inline if conditional statement, so if the images are 0 or not there,
                        ? <Text>Loading...</Text> //if no

                        //if yes,
                        //inside the map, it defines the (image, index) as in a for loop
                        : images.map((image, i) => ( //map- creates a list 
                            //the array starts from 0, and my id start from 1
                            //so if the id=1 in react clicks and the specif material id=1, then should be able to retrive the data from the responsive tables as in axios URL images/${id}
                            <TouchableOpacity key={i} onPress={() => handleImage(i + 1)}>
                                <Image source={{ uri: image }} style={stylesmaterialwise.imglist} />
                            </TouchableOpacity>
                        ))
                    }
                
            </View>
            </ScrollView>
        </View>
    );
    };

    export default PolyesterScreen;
