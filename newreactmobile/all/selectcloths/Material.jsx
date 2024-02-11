import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { stylesmaterial } from './Materialstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import {CottonScreen} from './CottonScreen';


const Material=()=> {
    const navigation = useNavigation(); 

    const [selectedcloth, setselectedcloth] = useState("Cotton");

    const handleNavigation = () => {
        if (selectedcloth === 'CottonScreen') {
          navigation.navigate('CottonScreen');
        }
      };

    return (
        <View >
            <Text style={styles.title}>Select Clothing Material</Text>
            <View style={stylesmaterial.subcontainer}>
                <Picker
                selectedValue={selectedcloth} style={stylesmaterial.dropdown} onValueChange={(clothValue,clothIndex)=> {
                    setselectedcloth(clothValue); navigation.navigate(clothValue);}}
                    //navigate to the screen which has the same screen name(value) matched
                >
                    <Picker.Item label="Cotton" value="CottonScreen" />
                    <Picker.Item label="Linen" value="LinenScreen"/>
                    <Picker.Item label="Silk" value="SilkScreen"/> 
                </Picker>
                <Button title="Next" onPress={handleNavigation} />
            </View>
            
        </View>
    );
    };

    export default Material;