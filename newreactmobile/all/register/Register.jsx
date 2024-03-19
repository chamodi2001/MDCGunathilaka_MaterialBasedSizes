import React,{useState} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity,ImageBackground } from 'react-native';
import { styles } from './Registerstyles';
import {Login} from '../login/Login';
import axios from 'axios';
import {styleslogin} from '../login/Loginstyles';

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
        const Register = { username, password, age, chestwidth };
        
        try {
        // const output = await axios.post('http://192.168.186.125:8080/user', Register);
        const output = await axios.post('http://192.168.1.59:8080/user', Register); //slt wifi
        window.alert('Successfully added data to the database');
        console.log(output.data);
        } catch (error) {
        console.error('Error in adding a new user:', error);
        }
        ////////////////////

        /////Validations
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
        //age must be between 0 to 100
        if(isNaN(age) || age<0 || age>100){
            Alert.alert('Error', 'Enter a valid age');
            return;
        }chestwidth
        if(isNaN(chestwidth)) {
            Alert.alert('Error', 'Enter a chest width');
            return;
        }
        else{
            Alert.alert('Successful', 'successfully registered');
            navigateTo.navigate('Login');
            return;
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
                <TextInput style={styles.input} onChangeText={text => setage(text)}
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