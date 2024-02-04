import React,{useState} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
import { stylessize } from './Entersizestyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EnterSize=()=>{
    const navigation = useNavigation();

    const [chestwidth,setcw]=useState('');

    const handleSubmit = () => {
        if(!chestwidth || isNaN(chestwidth)){
            Alert.alert('Error', 'Chest Width is required');
            return;
        }
        else{
            Alert.alert('Successful', 'successfully registered');
            navigation.navigate('Login');
            return;
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Enter Chest Size</Text>
            <TextInput style={styles.input} placeholder="Chest Size" onChangeText={text => setcw(text)} 
            defaultValue={chestwidth} />
            <TouchableOpacity style={stylessize.button} onPress={handleSubmit}>
                <Text style={stylessize.buttonText}>Enter</Text>
            </TouchableOpacity>
        </View>
    );
};
export default EnterSize;