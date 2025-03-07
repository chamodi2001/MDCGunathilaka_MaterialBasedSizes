import React,{useState} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity,ImageBackground } from 'react-native';
import { styles } from './Registerstyles';
import {Login} from '../login/Login';
import axios from 'axios';
import {styleslogin} from '../login/Loginstyles';
import { BASE_URL } from '../config';
//
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register=()=> {
    const navigateTo = useNavigation(); //property passing the usenavigation hook 

    const [username, setun] = useState(''); //to update the value of thr input field
    const [password, setpw] = useState('');
    const [age, setage] = useState('');
    const[chestwidth, setcw]=useState('');  

    // const handleSubmit =() => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        /////Validations
        if (!username) {
            //checks username is empty
            Alert.alert('Error', 'Username is required');
            return;
          }
              else if(!password) {
                  Alert.alert('Error', 'Password is required');
                  return;
              }
              else if(password.length < 8){
                      Alert.alert('Error', 'Enter a 8 character password');
                      return;
              }
            //   else if(!(/^(?=.*[A-Z])(?=.*\d)(?=.*[&#$@])[A-Za-z\d&#$@]{6,}$/.test(loginpassword))){   
            //     Alert.alert('Error', 'Must include a Number, Uppercase letter, a Special character (&, $, #, @)');
            //     return;
            //   }
                else if(password.length < 8){
                    Alert.alert('Error', 'Enter a 8 character password');
                    return;
                }
              //age must be between 0 to 100
              else if(isNaN(age) || age<0 || age>100){
                  Alert.alert('Error', 'Enter a valid age');
                  return;
              }
              else if(isNaN(chestwidth)) {
                  Alert.alert('Error', 'Enter a chest width');
                  return;
              }

          else{
            const Register = { username, password, age, chestwidth };

            // await axios.post('http://192.168.239.125:8080/user', Register);
            axios.post(`${BASE_URL}/user`, Register) //slt wifi    
            .then(response => {
                    if (response.status === 200) { //if response is success
                        window.alert('Successfully added New User');
                        navigateTo.navigate('Login');
                        console.log(response.data);
                    }
                })
                .catch(error => {
                    console.error('Error in adding a new user:', error);
                    Alert.alert('Error adding new Useer');
                });
          }     
    };

    return (
        // putting a image background 
          <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}> 
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} onChangeText={text => setun(text)}
                defaultValue={username} placeholder="Username" required/> 
                {/* default value would the current state of the textbox, while set() method would save the new value */}
                <TextInput style={styles.input} onChangeText={text => setpw(text)}
                    defaultValue={password} placeholder="Password" secureTextEntry/> 
                    {/*secureTextEntry- would hide the password when typing*/}
                    
                <TextInput style={styles.input} onChangeText={text => setage(text)}
                    defaultValue={age} placeholder="Age"/>
                    
                <TextInput style={styles.input} onChangeText={text => setcw(text)}
                defaultValue={chestwidth} placeholder="Chest Width"/>

               
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styleslogin.text}>Already have an account?</Text> 
                {/* if the user alredy have an account can just go to the login page */}
                <TouchableOpacity style={styleslogin.text} onPress={() => navigateTo.navigate('Login')}>
                    <Text style={styleslogin.textsign}>Sign In</Text>
                </TouchableOpacity>
            </View>
         </ImageBackground> 
    );
    };

    export default Register;