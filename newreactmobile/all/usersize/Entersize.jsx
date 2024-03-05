import React,{useState} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
import { stylessize } from './Entersizestyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EnterSize=()=>{
    const navigateTo = useNavigation();

    const [chestwidth,setcw]=useState('');

    const handleSubmit = () => {
        if(!chestwidth){
            Alert.alert('Error', 'Chest Width is required');
            return;
        }
        if(isNaN(chestwidth)){
            Alert.alert('Error', 'Chest Width should be a number');
            return;
        }
        else{
            // Alert.alert('Successful');
            navigateTo.navigate('HomeStack'); //obj.func
            return;
        }
    };

    return(
        <View style={styles.container}>
            <Text style={stylessize.title}>User Chest Size</Text>
            <TextInput style={styles.input} placeholder="Chest Size" onChangeText={text => setcw(text)} 
            defaultValue={chestwidth} />
            <TouchableOpacity style={stylessize.button} onPress={handleSubmit}>
                <Text style={stylessize.buttonText}>Enter</Text>
            </TouchableOpacity>
            {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
            {/* <Button title="Back" onPress={() => navigation.navigate('Login')}/> */}
        </View>
    );
};
export default EnterSize;