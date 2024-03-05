import React,{useState} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
// import { stylessizerec } from './SizeRecstyles';
import { stylessize } from '../usersize/Entersizestyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SizeRec=()=>{
    const navigateTo = useNavigation();

    const [chestwidth,setcw]=useState('');

    return(
        <View style={styles.container}>
            <Text style={stylessize.title}>Recomended Size</Text>
            <Text style={styles.title}>----</Text>
            {/* <TextInput style={styles.input} placeholder="Recomended Size" onChangeText={text => setcw(text)} 
            defaultValue={chestwidth} /> */}
            {/* <TouchableOpacity style={stylessize.button} onPress={handleSubmit}>
                <Text style={stylessize.buttonText}>Enter</Text>
            </TouchableOpacity> */}
            <Text style={stylessize.title}> Availability</Text>
            <Text style={styles.title}>----</Text>
        </View>
    );
};
export default SizeRec;