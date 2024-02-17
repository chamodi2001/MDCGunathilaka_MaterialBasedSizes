import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { stylescotton } from './Cottonstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


const CottonScreennew=()=> {
    const navigation = useNavigation(); 

    const [selectedcloth, setselectedcloth] = useState();


    return (
        <View>
            <View style={stylescotton.subcontainer}>
                <Text style={stylescotton.title}>Cotton Material</Text>
            </View>
            <View style={stylescotton.subcontainerMaterial}>
                <Text style={stylescotton.title}>Cotton </Text>
            </View>
        </View>
    );
    };

    export default CottonScreennew;