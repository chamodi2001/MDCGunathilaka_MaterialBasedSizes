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

    const [usersize, setUsersize] = useState('Size6'); //for radio btn 
    //the pre saved value would be size 6
    const [material, setMaterial] =useState();
  
    const handleRadiobtn = (selectedCW) => { //the func would be updated with new value, which user entered
        // event.preventDefault();
        setUsersize(selectedCW); //updating the state
        };

        const handleSubmit = () => {
            const feedbacks = { selectedCW:usersize, material};
            axios.post('http://192.168.186.125:8080/userfeedback', feedbacks) //redmi wifi
            // axios.post('http://192.168.1.59:8080/userfeedback', feedbackdetails) //slt wifi

            .then(output => {
                console.log('Feedback submitted:',output.data);
            })
            
            .catch(error => {
                console.log('Error submitting feedback:',error);
            });

            if (!material) {
                //checks material attribute is empty
                Alert.alert('Error', 'Material is required');
                return;//stops the function
              }
                else {
                    Alert.alert('Successful', 'Thank you for your feedback');
                    navigateTo.navigate('HomeStack'); //would navigate to the stack called homeStack.
                    return;
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
                    <Text style={stylesfeedback.title}>Enter Chest Width</Text>
                    <RadioButton.Group style={stylesfeedback.radio} onValueChange={(value) => handleRadiobtn(value)}
                    value={usersize}>
                        <RadioButton.Item label="Width 30-31.5 inches" value="Size6"/>
                        {/* if the user's chest width size is 30-31.5, so the brand A's size chart measurement for that chest width is- size 6 */}
                        <RadioButton.Item label="Width 32-33.5 inches" value="Size8"/>
                        <RadioButton.Item label="Width 34-35.5 inches" value="Size10"/>
                        <RadioButton.Item label="Width 36-37.5 inches" value="Size12"/>
                        <RadioButton.Item label="Width 38-39.5 inches" value="Size14"/>
                        <RadioButton.Item label="Width 40-42.5 inches" value="Size16"/>
                    </RadioButton.Group>

                    {/*  */}
                    <TextInput style={styles.input} onChangeText={text => setMaterial(text)}
                    defaultValue={material} placeholder="Clothing Material"/>

                    {/* visit the next page -the size recommendation system*/}
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={stylesfeedback.buttonText}>Next</Text>
                    </TouchableOpacity>
                    
                    {/* skip and just continue using the application */}
                    <TouchableOpacity onPress={() => navigateTo.navigate('Material')}>
                        <Text style={stylesfeedback.textsign}>Skip</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </View>
        </ImageBackground>
    );
    };

    export default Userfeedback;