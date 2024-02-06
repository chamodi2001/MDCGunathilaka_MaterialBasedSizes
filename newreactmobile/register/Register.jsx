import React,{useState} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
import { styles } from './Registerstyles';
import {Login} from '../login/Login';
//
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register=()=> {
    const navigation = useNavigation(); //property passing the usenavigation hook 

    const [username, setun] = useState(''); //to update the value of thr input field
    const [password, setpw] = useState('');
    const [age, setage] = useState('');
    const[chestwidth, setcw]=useState('');  

    const handleSubmit = () => {
        if (!username) {
          //checks username is empty
          Alert.alert('Error', 'Username is required');
          return;
        }
        if (!password) {
            Alert.alert('Error', 'Password is required');
            return;
            }
            else if(password.length < 4){
                Alert.alert('Error', 'Enter more than 4 characters');
                return;
            }
        if(isNaN(age) || age<0 || age>100){
            Alert.alert('Error', 'Enter a valid age');
            return;
        }
        // if(!chestwidth || isNaN(chestwidth)){
        //     Alert.alert('Error', 'Chest Width is required');
        //     return;
        // }
        else{
            Alert.alert('Successful', 'successfully registered');
            navigation.navigate('Login');
            return;
        }
    };

    return (
        // <ImageBackground source={require('./back.jpg')} style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput style={styles.input} placeholder="Username" onChangeText={text => setun(text)}
            defaultValue={username} required/> 
            {/* initial value of the input field */}
            <TextInput style={styles.input} placeholder="Password" onChangeText={text => setpw(text)}
                defaultValue={password} secureTextEntry/>
            <TextInput style={styles.input} placeholder="Age" onChangeText={text => setage(text)}
                defaultValue={age} />
            <TextInput style={styles.input} placeholder="Chest Width" onChangeText={text => setcw(text)}
                defaultValue={chestwidth} />
            {/* when click onthe btn, navigate to the login page */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity> */}
            {/* <Button style={styles.button} title="sign up" onPress={handleSubmit} /> */}
        </View>
        // </ImageBackground>
    );
    };

    export default Register;