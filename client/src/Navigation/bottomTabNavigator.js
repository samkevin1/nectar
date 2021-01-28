import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from '../Screens';

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator() {
  
  return(
    <BottomTab.Navigator
      initialRouteName="Feed"
      activeColor={'#53B175'}
      inactiveColor={"#616161"}
      barStyle={{ backgroundColor: '#FFFFFF' }}
    >
      <BottomTab.Screen 
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: () => <TabBarIcon name="home" />
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon({ name }) {
  return <AntDesign size={26} name={name} color={'#53B175'} />;
}

const FeedStack = createStackNavigator();

function HomeNavigator() {
  return(
     <FeedStack.Navigator screenOptions={{headerShown: false}}>
       <FeedStack.Screen
        name="Home"
        component={Home}
      />
     </FeedStack.Navigator>
  )
}