import React,{useState,useEffect} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image,ScrollView } from 'react-native';
import { stylescotton } from './Cottonstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import {stylesmaterialwise} from './Materialwisestyles';


const SpandexblendScreen=()=> {
    const navigateTo = useNavigation(); 

    const [images, setImages] = useState(null);

    useEffect(() => { //will render the page firs, then loads whats inside
        axios.get('http://192.168.76.125:8080/imagesSpandex/listSpandex')
        // axios.get('http://192.168.1.59:8080/imagesSpandex/listSpandex') //slt
            .then((output) => {
                if (output.data) { //checking whether response/output data is null or 0
                    let images = output.data.map(base64String => 'data:image/png;base64,' + base64String);
                    setImages(images);
                }
            });
    }, []);

    const handleImage = (id) => {
        axios.get(`http://192.168.76.125:8080/imagesSpandex/${id}`)
        // axios.get(`http://192.168.1.59:8080/imagesSpandex/${id}`)
        .then((output) => {
                 if (output.data) {
                let itemid=output.data.itemid;
                let price = output.data.price;
                let stock = output.data.stock;

                //displays the item id that clicked throgh the console log
                console.log("ITEM INDEX CLICKED: ",id);
                navigateTo.navigate('SizeRec', { itemid:itemid, price: price, stock: stock }); 
            }
        })
        .catch((error) => {
            console.error(`Error fetching the image with id ${id}: `, error);
        });
    };

    return (
        <View>
            <View style={stylescotton.subcontainer}>
                <Text style={stylescotton.title}>Spandex Material</Text>
            </View>
            <View style={stylescotton.subcontainerMaterial}>
                <Text style={stylescotton.title}>Spandex </Text>
                {/* <Image source={{ uri: image }} style={{width: 100, height: 100}} /> */}
                <ScrollView>
                    {images === null //inline if conditional statement, so if the images are 0 or not there,
                        ? <Text>Loading...</Text> //if no

                        //if yes,
                        //inside the map, it defines the (image, index) as in a for loop
                        : images.map((image, i) => ( //map- creates a list 
                            //the array starts from 0, and my id start from 1
                            <TouchableOpacity key={i} onPress={() => handleImage(i + 1)}>
                                <Image source={{ uri: image }} style={stylesmaterialwise.imglist} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
    };
    export default SpandexblendScreen;
