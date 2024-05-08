// import React from 'react';
// import { Text, View } from 'react-native';
// import Register from './register/Register';
// import Login from './login/Login';

// function App(){
//   return (
//     <View>
//       <Register />
//       <Login />
//     </View>
//   );
// }

// export default App;

import React from 'react';
import {Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'; //stack of screens to navigate
import { NavigationContainer } from '@react-navigation/native'; //to wrap the stack navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Loading from './all/loading/Loading';
import Login from './all/login/Login';
import Register from './all/register/Register';
import EnterSize from './all/usersize/Entersize'; 
import Material from './all/selectcloths/Material';
import CottonScreennew from './all/selectcloths/CottonScreennew';
import PolyesterScreen from './all/selectcloths/PolyesterScreen';
import SpandexblendScreen from './all/selectcloths/Spandexblend';
import SizeRec from './all/availability/SizeRec';
import Userfeedback from './all/feedback/Userfeedback';
import Paypal from './all/payment/Paypal';
import Soldout from './all/soldout/Soldout';
import BrandA from './all/brand/BrandA';


import BottomNavbar from './all/bottomnav/BottomNavbar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';    
const Stackpath = createStackNavigator(); 
const tabnav= createBottomTabNavigator();
const homenav= createBottomTabNavigator();


const HomeStack=()=>{
  return(
    <homenav.Navigator screenOptions={{headerShown: false}}>
    
      <homenav.Screen name="Material" component={Material} 
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('./public/images/home2.png')}
            style={{ width: 25, height: 25 }}
          />
        ),}}
      /> 

    </homenav.Navigator>
  );
};

///one botton navigator
const Bottomstack = () => {
  return (
    <tabnav.Navigator screenOptions={{headerShown: false}}>

      <tabnav.Screen name="Spandexblend" component={SpandexblendScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require('./public/images/spandex1.jpg')}
                  style={{ width: 25, height: 25 }} 
                />
              ),}}
      />
      
      <tabnav.Screen name="Polyester" component={PolyesterScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('./public/images/polyester1.png')}
            style={{ width: 25, height: 25 }} 
          />
        ),}}
      />
      
      <tabnav.Screen name="Cotton" component={CottonScreennew}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('./public/images/cottonicon3.png')}
            style={{ width: 25, height: 25 }} 
          />
        ),}}
      />
    </tabnav.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
       <Stackpath.Navigator>

          <Stackpath.Screen name="Loading" component={Loading} options={{ headerShown: false }}/>
          {/* press login then new stack  */}
          <Stackpath.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stackpath.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          {/* <Stackpath.Screen name="EnterSize" component={EnterSize} options={{ headerShown: false }}/> */}

          <Stackpath.Screen name="BrandA" component={BrandA} options={{ headerShown: false }}/>
          {/* the home stack-'Mertrial' page */}
          <Stackpath.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }}/> 

          {/* after the above screens, the bottomstack screens would be loaded */}
          <Stackpath.Screen name="Bottomstack" component={Bottomstack} options={{ headerShown: false }}/>

          <Stackpath.Screen name="SizeRec" component={SizeRec} options={{ headerShown: false }}/>

          {/* press buy then new stack  */}
          <Stackpath.Screen name="Paypal" component={Paypal} options={{ headerShown: false }}/> 
        
          <Stackpath.Screen name="Userfeedback" component={Userfeedback} options={{ headerShown: false }}/>
         
      </Stackpath.Navigator>
    </NavigationContainer>
  );
};

export default App;
