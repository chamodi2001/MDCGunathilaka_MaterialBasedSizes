import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { stylesregister } from './Loginstyles';
import { styles } from '../register/Registerstyles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login=()=> {
    const navigation = useNavigation(); 

    const [usernamelog, setunlog] = useState(''); 
    const [passwordlog, setpwlog] = useState('');

    const handleSubmit = () => {
        if (!usernamelog) {
            //checks username is empty
            Alert.alert('Error', 'Username is required');
            return;//stops the function
          }
          if (!passwordlog) {
              Alert.alert('Error', 'Password is required');
              return;
              }
              else if(passwordlog.length < 4){
                  Alert.alert('Error', 'Enter more than 4 characters');
                  return;
              }
          else{
              Alert.alert('Successful', 'successfully registered');
              navigation.navigate('EnterSize'); //obj.func
              return;
          }
        //checks with data base, if the user exists, and 
        //if the password matches the username
        // if (!usernamelog) {
        //   //checks username is empty
        //   Alert.alert('Error', 'Username is required');
        //   return;
        // }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Username" onChangeText={text => setunlog(text)}
            defaultValue={usernamelog} />
            <TextInput style={styles.input} placeholder="Password" onChangeText={text => setpwlog(text)}
                defaultValue={passwordlog} secureTextEntry/>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
    };

    export default Login;