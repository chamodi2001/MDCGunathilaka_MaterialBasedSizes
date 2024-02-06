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
import { createStackNavigator } from '@react-navigation/stack'; //stack of screens to navigate
import { NavigationContainer } from '@react-navigation/native'; //to wrap the stack navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from './loading/Loading';
import Register from './register/Register';
import Login from './login/Login';
import EnterSize from './usersize/Entersize';     
import BottomNavbar from './bottomnav/BottomNavbar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';    
    
const Stackpath = createStackNavigator();
const navbar= createBottomTabNavigator();

const Stackroute=()=>(
  <Stackpath.Navigator
        screenOptions={{
          headerShown: false,  //hiding the header
      }}>
        <Stackpath.Screen name="Loading" component={Loading} />
        <Stackpath.Screen name="Register" component={Register} />
        <Stackpath.Screen name="Login" component={Login} />
        <Stackpath.Screen name="EnterSize" component={EnterSize} />
  </Stackpath.Navigator>
);


const App = () => {
  return (
    // <NavigationContainer>
    //   <BottomNavbar/> 
    // </NavigationContainer>

    <NavigationContainer>
      <navbar.Navigator>
      <navbar.Screen name="Stackpath" component={Stackroute}/>
      </navbar.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
