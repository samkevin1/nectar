import React from 'react';
import { Text, View, StatusBar, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';

const OnBoarding = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../Helpers/Images/groceries4.jpg')} style={styles.image}>
        <StatusBar hidden translucent/>
        <View style={styles.bodyTop} />
        <View style={styles.bodyBottom}>
          <FontAwesome5 style={{marginBottom: 5}} name="carrot" size={50} color="white" />
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to our store</Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
          <Button 
            mode={'contained'} 
            style={styles.button} 
            color={'#53B175'} 
            labelStyle={styles.buttonText}
            uppercase={false}
            onPress={() => navigation.navigate('login')}
          >
            Get Started
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnBoarding;
