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
import Loading from './all/loading/Loading';
import Register from './all/register/Register';
import Login from './all/login/Login';
import EnterSize from './all/usersize/Entersize'; 
import Material from './all/selectcloths/Material';
import CottonScreen from './all/selectcloths/CottonScreen';

import BottomNavbar from './all/bottomnav/BottomNavbar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';    
    
const Stackpath = createStackNavigator(); 
const navbar= createBottomTabNavigator();

const Stacknav=()=>(
  <Stackpath.Navigator
        screenOptions={{
          headerShown: false,  //hiding the header
      }}>
        {/* <Stackpath.Screen name="Loading" component={Loading} options={{ headerTitle: null }}/>
        <Stackpath.Screen name="Register" component={Register} options={{ headerTitle: null }}/>
        <Stackpath.Screen name="Login" component={Login} options={{ headerTitle: null }}/> */}
        <Stackpath.Screen name="EnterSize" component={EnterSize} options={{ headerTitle: null }}/>
        {/* <Stackpath.Screen name="Material" component={Material} options={{ headerTitle: null }}/>
        <Stackpath.Screen name="CottonScreen" component={CottonScreen} options={{ headerTitle: null }}/> */}
  </Stackpath.Navigator>
);

const EnterSizeNav = () => (
  <navbar.Navigator>
    <navbar.Screen name="EnterSize" component={EnterSize} />
    <navbar.Screen name="Login" component={Login} options={{ tabBarLabel: 'Login' }} />
  </navbar.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stackpath.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stackpath.Screen name="Stackpath" component={Stacknav} />
        <Stackpath.Screen name="EnterSizeNav" component={EnterSizeNav} />
      </Stackpath.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <BottomNavbar/> 
    // </NavigationContainer>

    // <NavigationContainer>
    //   <navbar.Navigator>
    //     <navbar.Screen name="Stackpath" component={Stackroute}/>
    //   </navbar.Navigator>
    // </NavigationContainer>
  );
};

export default App;
