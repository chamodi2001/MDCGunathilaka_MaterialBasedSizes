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

import { createStackNavigator } from '@react-navigation/stack'; //stack of screens to navigate
import { NavigationContainer } from '@react-navigation/native'; //to wrap the stack navigator
import Register from './register/Register';
import Login from './login/Login';
import EnterSize from './usersize/Entersize';             
const Stack = createStackNavigator();
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Bottomstack = () => {
  return (
    <tabnav.Navigator screenOptions={{headerShown: false}}>

      {/* <tabnav.Screen name="EnterSize" component={EnterSize}/> */}
      <tabnav.Screen name="Material" component={Material} 
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Image
            source={require('./public/images/home1.png')}
            style={{ width: 25, height: 25 }}
          />
        ),}}
      />
      <tabnav.Screen name="CottonScreennew" component={CottonScreennew} options={{ headerShown: false }}/>

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
          <Stackpath.Screen name="Bottomstack" component={Bottomstack} />
          {/* <Stackpath.Screen name="EnterSize" component={EnterSize} options={{ headerShown: false }}/>
          <Stackpath.Screen name="Material" component={Material} options={{ headerShown: false }}/>
          <Stackpath.Screen name="CottonScreennew" component={CottonScreennew} options={{ headerShown: false }}/> */}
         
        
      </Stackpath.Navigator>
    </NavigationContainer>
  );
};

export default App;
