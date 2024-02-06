import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EnterSize from '../usersize/Entersize';  
import Login from '../login/Login';

const navbar= createBottomTabNavigator();

const BottomNavbar=()=>{

    return(
        <navbar.Navigator
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            style: {
              backgroundColor: '#f4511e',
            },
          }}
          >
            <navbar.Screen name="EnterSize" component={EnterSize}/>
            <navbar.Screen name="Login" component={Login}/>
        </navbar.Navigator>
    );
};
export default BottomNavbar;
