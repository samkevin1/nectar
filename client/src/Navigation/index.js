import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, OnBoarding, Login, SignUp } from '../Screens';

import BottomTabNavigator from './bottomTabNavigator';
import {
  useUserContext
} from "../Contexts/User";

const Stack = createStackNavigator();

export const Routes = () => {

  const {
    token,
    useToken
  } = useUserContext();

  if(token)
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Root' component={BottomTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name='splash'
          component={Splash} 
        />
        <Stack.Screen 
          name='onBoarding'
          component={OnBoarding}
        />
        <Stack.Screen 
          name='login'
          component={Login}
        />
        <Stack.Screen 
          name='signup'
          component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};