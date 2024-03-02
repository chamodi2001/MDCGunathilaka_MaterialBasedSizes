import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { styleslogin } from './Loginstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Register from '../register/Register';
import EnterSize from '../usersize/Entersize';
import axios from 'axios';


const Login=()=> {
    const navigation = useNavigation(); 

    const [loginusername, setunlog] = useState(''); 
    const [loginpassword, setpwlog] = useState('');

    const handleSubmit = async (event) => {
        //
        event.preventDefault();

        const Logindetails = {// a obj with 2 properties
            //to match with the property names in the backend
            loginusername:loginusername, //leftside- from java BE, rightside- from state hook
            loginpassword:loginpassword
        };
       
        await axios.post('http://192.168.1.59:8080/userlogin', Logindetails)
        .then(output => {
            console.log(output.data);
            Alert.alert('Login successful');
            navigation.navigate('Bottomstack'); //obj.func
        })
        
        .catch(error => {
            console.log(error);
            // Alert.alert('Please enter a valid Username and Password');
            Alert.alert('Username or Password is Incorrect');

            // if (error.output && error.output.status === 401) {
            //     // Alert.alert('error pw and un');
            //     setErrorMessage('Invalid username or password');
            // } else {
            //     console.log(error);
            // }
            
        });
        
        //
        if (!loginusername) {
            //checks username is empty
            Alert.alert('Error', 'Username is required');
            return;//stops the function
          }
          if (!loginpassword) {
              Alert.alert('Error', 'Password is required');
              return;
              }
              else if(loginpassword.length < 4){
                  Alert.alert('Error', 'Enter more than 4 characters');
                  return;
              }
        
    };
    return (
        <View style={styles.container}>
            <Text style={styleslogin.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Username" onChangeText={text => setunlog(text)}
            defaultValue={loginusername} />
            <TextInput style={styles.input} placeholder="Password" onChangeText={text => setpwlog(text)}
                defaultValue={loginpassword} secureTextEntry/>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styleslogin.text}>Don't have an account?</Text> 
            <TouchableOpacity style={styleslogin.text} onPress={() => navigation.navigate('Register')}>
                <Text style={styleslogin.textsign}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
    };

    export default Login;