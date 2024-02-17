import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { stylesmaterial } from './Materialstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import {CottonScreennew} from './CottonScreennew';


const Material=()=> {
    const navigation = useNavigation(); 

    const [selectedcloth, setselectedcloth] = useState("Cotton");

    const handleNavigation = () => {
        if (selectedcloth === 'CottonScreenv') {
          navigation.navigate('CottonScreennew');
        }
      };

    return (
        <View >
            <Text style={styles.title}>Select Clothing Material</Text>
            <View style={stylesmaterial.subcontainer}>
                <Picker
                selectedValue={selectedcloth} style={stylesmaterial.dropdown} onValueChange={(clothValue,clothIndex)=> {setselectedcloth(clothValue);}}
                    //navigate to the screen which has the same screen name(value) matched
                >
                    <Picker.Item label="Cotton" value="CottonScreenv" />
                    <Picker.Item label="Linen" value="LinenScreenv"/>
                    <Picker.Item label="Silk" value="SilkScreenv"/> 
                </Picker>
                <TouchableOpacity style={styles.button} onPress={handleNavigation}>
                    <Text style={styles.buttonText}>Enter</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
    };

    export default Material;