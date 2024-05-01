import React,{useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import { stylesfeedback } from './Userfeedbackstyles';
import { styleslogin } from '../login/Loginstyles';
import { styles } from '../register/Registerstyles';
import { Alert, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { stylescotton } from '../selectcloths/Cottonstyles';


import axios from 'axios';


const Userfeedback=()=> {
    const navigateTo = useNavigation(); 

    const [material, setMaterial] =useState('');
    const [cw, setCw] =useState('');
    const [uksize, setUksize] =useState('');

        const handleSubmit = async (event) => {
            event.preventDefault();
        
        
            const feedbacks = { material, cw, uksize};

            axios.post('http://192.168.1.59:8080/userfeedback', feedbacks)
                .then(output => {
                    console.log('Feedback submitted:', output.data);
                    Alert.alert('Successful', 'Thank you for your feedback');
                    navigateTo.navigate('HomeStack'); //would navigate to the stack called homeStack.
                })
                .catch(error => {
                    console.log('Error submitting feedback:', error);
                });


                //checks if the attributes is empty
            if (!material || !cw || !uksize) {
                Alert.alert('Error', 'All fields are required');
                return; //stops the function
            }
            
        };              
    

    return (
        <ImageBackground source={require('../../public/images/background/three.jpg')} style={{width: '100%', height: '100%'}}>
        <View> 
            <ScrollView>
                <View style={stylescotton.subcontainer}>
                    <Text style={stylesfeedback.subtitleF}>If haven't give a feedback,</Text>
                    <Text style={stylesfeedback.subtitleS}> Please give a little feedback about your past purchases made from this brand!</Text>
                </View>
                <View style={styles.container}>
                    <Text style={stylesfeedback.title}>Clothing Material</Text>

                    <RadioButton.Group style={stylesfeedback.radio} onValueChange={setMaterial} value={material}>
                        <RadioButton.Item label="Polyester" value="polyester" />
                        <RadioButton.Item label="Cotton" value="cotton" />
                        <RadioButton.Item label="SpandexBlend" value="spandexblend" />
                    </RadioButton.Group>
                    
                    {/* cotton is less strechable than polyester */}
                    <TextInput style={styles.input} onChangeText={text => setCw(text)}
                    defaultValue={cw} placeholder="Chest Width"/>
                
                    <TextInput style={styles.input} onChangeText={text => setUksize(text)}
                    defaultValue={uksize} placeholder="Uk Size"/>
                     {/* <TextInput style={styles.input} onChangeText={text => setCw(Number(text))}
                    defaultValue={cw.toString()} placeholder="Chest Width"/>

                    <TextInput style={styles.input} onChangeText={text => setUksize(Number(text))}
                    defaultValue={uksize.toString()} placeholder="Uk Size"/> */}

                    {/* visit the next page -the size recommendation system*/}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={stylesfeedback.buttonText}>Next</Text>
                    </TouchableOpacity>
                    
                    {/* skip and just continue using the application */}
                    <TouchableOpacity onPress={() => navigateTo.navigate('HomeStack')}>
                        <Text style={stylesfeedback.textsign}>Skip</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </View>
        </ImageBackground>
    );
    };

    export default Userfeedback;