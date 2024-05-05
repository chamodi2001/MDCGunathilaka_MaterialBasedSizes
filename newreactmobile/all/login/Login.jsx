import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity,ImageBackground } from 'react-native';
import { styleslogin } from './Loginstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';

import axios from 'axios';


const Login=()=> {
    const navigateTo = useNavigation(); 

    const [loginusername, setunlog] = useState(''); 
    const [loginpassword, setpwlog] = useState('');

    const handleSubmit = async (event) => {
        //
        event.preventDefault();

        //validations
        if (!loginusername) {
            //checks username is empty
            Alert.alert('Error', 'Username is required');
            return;//stops the function
          }
          else if(!loginpassword) {
            Alert.alert('Error', 'Password is required');
            return;
            }
            else if(loginpassword.length < 4){
                Alert.alert('Error', 'Enter more than 4 character password');
                return;
            }
            else {
                const Logindetails = {// a obj with 2 properties
                    //to match with the property names in the backend
                    //for findby method/get req
                    loginusername:loginusername, //leftside- from java BE, rightside- from state hook
                    loginpassword:loginpassword
                };
               
                /////////////////////////////////////////////////
        
                // await axios.post('http://192.168.239.125:8080/userlogin', Logindetails)
                axios.post('http://192.168.1.59:8080/userlogin', Logindetails)            
                .then(response => {
                        if (response.status === 200) {
                          AsyncStorage.setItem('loginusername', loginusername);
                          Alert.alert('Login Successful');
                        //   navigateTo.navigate('HomeStack');

                        //cannot go back to the login page again
                        //by using the 'reset' starts from a new stack. abondan the old stack,
                        //so xcannot go back to previous stack components
                        navigateTo.dispatch(
                            CommonActions.reset({
                              index: 0,
                              routes: [
                                { name: 'HomeStack' },
                              ],
                            })
                          );
                          //
                        }
                      })
                .catch(error => {
                console.error('There was an error!', error);
                Alert.alert('Username or Password is Incorrect');
                });
                return true;
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