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

    useEffect(() => { //will render the page firs, then loads whats inside
        axios.get('http://192.168.1.59:8080/imageList')
            .then((output) => {
                if (output.data) { //checking whether response/output data is null or 0
                    let images = output.data.map(base64String => 'data:image/png;base64,' + base64String);
                    setImages(images);
                }
            });
    }, []);

    const handleImage = () => {
        navigateTo.navigate('SizeRec'); 
    };

    return (
        <View>
            <View style={stylescotton.subcontainer}>
                <Text style={stylescotton.title}>Polyester Material</Text>
            </View>
            <View style={stylescotton.subcontainerMaterial} >
                <Text style={stylescotton.title}>Polyester </Text>
                {/* <Image source={{ uri: image }} style={{width: 100, height: 100}} /> */}
                <ScrollView>
                    {images === null //inline if conditional statement, so if the images are 0 or not there,
                        ? <Text>Loading...</Text> //if no

                        //if yes,
                        //inside the map, it defines the (image, index) as in a for loop
                        : images.map((image, i) => ( //map- creates a list 
                            <TouchableOpacity key={i} onPress={handleImage}>
                                {/* <Image source={{ uri: image }} style={{width: 200, height: 200, margin:20}} /> */}
                                <Image source={{ uri: image }} style={stylesmaterialwise.imglist} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    );
    };

    export default PolyesterScreen;
