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


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,  //hiding the header
      }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EnterSize" component={EnterSize} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
