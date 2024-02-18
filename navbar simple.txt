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
import Register from './all/register/Register';
import Login from './all/login/Login';
import EnterSize from './all/usersize/Entersize'; 
import Material from './all/selectcloths/Material';
import CottonScreennew from './all/selectcloths/CottonScreennew';

import BottomNavbar from './all/bottomnav/BottomNavbar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';    
    
const Stackpath = createStackNavigator(); 
const tabnav= createBottomTabNavigator();

const Bottomstack = () => {
  return (
    <tabnav.Navigator>
      {/* <navbar.Screen name="Login" component={Login} /> */}
      <tabnav.Screen name="Home" component={EnterSize}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('./public/images/home1.png')}
            style={{ width: 25, height: 25 }}
          />
        ),}}
      />
      <tabnav.Screen name="Material" component={Material} />
      {/* <tabnav.Screen name="CottonScreen" component={CottonScreennew} /> */}
    </tabnav.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
       <Stackpath.Navigator>

          
          <Stackpath.Screen name="Loading" component={Loading} options={{ headerShown: false }}/>
          <Stackpath.Screen name="Register" component={Register} options={{ headerShown: false }}/>
          <Stackpath.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stackpath.Screen name="EnterSize" component={EnterSize} options={{ headerShown: false }}/>
          <Stackpath.Screen name="Material" component={Material} options={{ headerShown: false }}/>
          <Stackpath.Screen name="CottonScreennew" component={CottonScreennew} options={{ headerShown: false }}/>
          <Stackpath.Screen name="Bottomstack" component={Bottomstack} />
        
      </Stackpath.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stackpath.Navigator
    //     screenOptions={{
    //       headerShown: false,  //hiding the header
    //   }}>
    //     <Stackpath.Screen name="Loading" component={Loading} options={{ headerTitle: null }}/>
    //     <Stackpath.Screen name="Register" component={Register} options={{ headerTitle: null }}/>
    //     <Stackpath.Screen name="Login" component={Login} options={{ headerTitle: null }}/> 
    //     <Stackpath.Screen name="EnterSize" component={EnterSize} options={{ headerTitle: null }}/>
    //     <Stackpath.Screen name="Material" component={Material} options={{ headerTitle: null }}/>
    //     <Stackpath.Screen name="CottonScreennew" component={CottonScreennew} options={{ headerTitle: null }}/>
    //   </Stackpath.Navigator>
    // </NavigationContainer>
    
  );
};

export default App;
