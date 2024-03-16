import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, ImageBackground} from 'react-native';
import { stylesmaterial } from './Materialstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import {CottonScreennew} from './CottonScreennew';


const Material=()=> {
    const navigateTo = useNavigation(); 

    const [selectedcloth, setselectedcloth] = useState("Cotton");

    const handleNavigation = () => {
        if (selectedcloth === 'CottonScreenv') { //the type and value both has to be equaled
            navigateTo.navigate('Bottomstack',{screen: 'Cotton'});// this has to be the name of the screen, not has to be the component name
        }
        else if(selectedcloth==='PolyesterScreenv'){
            navigateTo.navigate('Bottomstack',{screen: 'Polyester'});
        }
        else if(selectedcloth==='SpandexblendScreenv'){
            navigateTo.navigate('Bottomstack', {screen: 'Spandexblend'});
        }
      };

    return (
        <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View >
            <Text style={styles.title}>Select Clothing Material</Text>
            <View style={stylesmaterial.subcontainer}>
                <Picker
                selectedValue={selectedcloth} style={stylesmaterial.dropdown} onValueChange={(clothValue,clothIndex)=> {setselectedcloth(clothValue);}}
                    //navigate to the screen which has the same screen name(value) matched
                >
                    <Picker.Item label="Cotton" value="CottonScreenv" />
                    <Picker.Item label="Polyester" value="PolyesterScreenv"/>
                    <Picker.Item label="Spandexblend" value="SpandexblendScreenv"/> 
                </Picker>
                <TouchableOpacity style={stylesmaterial.button} onPress={handleNavigation}>
                    <Text style={stylesmaterial.buttonText}>Enter</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ImageBackground>
    );
    };

    export default Material;