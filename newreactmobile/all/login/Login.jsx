import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity,ImageBackground } from 'react-native';
import { styleslogin } from './Loginstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';


const Login=()=> {
    const navigateTo = useNavigation(); 

    const [loginusername, setunlog] = useState(''); 
    const [loginpassword, setpwlog] = useState('');

    const handleSubmit = async (event) => {
        //
        event.preventDefault();

        const Logindetails = {// a obj with 2 properties
            //to match with the property names in the backend
            //for findby method/get req
            loginusername:loginusername, //leftside- from java BE, rightside- from state hook
            loginpassword:loginpassword
        };
       
        // await axios.post('http://192.168.239.125:8080/userlogin', Logindetails)
        await axios.post('http://192.168.1.59:8080/userlogin', Logindetails) //slt wifi
        .then(output => {
            console.log(output.data);
            Alert.alert('Login successful');
            navigateTo.navigate('Userfeedback'); //obj.func
        })
        
        .catch(error => {
            console.log(error);
            // Alert.alert('Please enter a valid Username and Password');
            Alert.alert('Username or Password is Incorrect');
            
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
                  navigateTo.navigate('EnterSize');
                  return;
                  
              }
        
    };
    return (
        <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
            <Text style={styleslogin.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Username" onChangeText={text => setunlog(text)}
            defaultValue={loginusername} />
            <TextInput style={styles.input} placeholder="Password" onChangeText={text => setpwlog(text)}
                defaultValue={loginpassword} secureTextEntry/>

            {/* user can login, if alredy have an account */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* if the user doesnot have an accound, shoyuld signup or register to the system first */}
            <Text style={styleslogin.text}>Don't have an account?</Text> 
            <TouchableOpacity style={styleslogin.text} onPress={() => navigateTo.navigate('Register')}>
                <Text style={styleslogin.textsign}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
    };

    export default Login;