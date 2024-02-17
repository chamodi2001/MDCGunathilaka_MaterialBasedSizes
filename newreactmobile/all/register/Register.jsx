import React,{useState} from 'react';
import { Text, View, TextInput, Button,TouchableOpacity } from 'react-native';
import { styles } from './Registerstyles';
import {Login} from '../login/Login';
import axios from 'axios';
// import Bottomstack from '../App';

//
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register=()=> {
    const navigation = useNavigation(); //property passing the usenavigation hook 

    const [username, setun] = useState(''); //to update the value of thr input field
    const [password, setpw] = useState('');
    const [age, setage] = useState('');
    const[chestwidth, setcw]=useState('');  

    // const handleSubmit =() => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const Register = { username, password, age, chestwidth };
        
        try {
        const res = await axios.post('http://localhost:4000/addbooks', Register);
        window.alert('Successfully added data to the database');
        console.log(res.data);
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
        if(isNaN(age) || age<0 || age>100){
            Alert.alert('Error', 'Enter a valid age');
            return;
        }
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
            <TextInput style={styles.input} onChangeText={text => setun(text)}
            defaultValue={username} placeholder="Username" required/> 
            {/* initial value of the input field */}
            <TextInput style={styles.input} onChangeText={text => setpw(text)}
                defaultValue={password} placeholder="Password" secureTextEntry/>
            <TextInput style={styles.input} onChangeText={text => setage(text)}
                defaultValue={age} placeholder="Age"/>
            <TextInput style={styles.input} onChangeText={text => setcw(text)}
                defaultValue={chestwidth} placeholder="Chest Width"/>
            {/* when click onthe btn, navigate to the login page */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity> */}
            {/* <Button style={styles.button} title="sign up" onPress={handleSubmit} /> */}
            <Button title="Sign up" onPress={() => navigation.navigate('Bottomstack')} />
        </View>
        // </ImageBackground>
    );
    };

    export default Register;