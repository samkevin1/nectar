import React, { useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import styles from './styles';

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() =>{
      navigation.navigate('onBoarding');
    }, 3000);
  },[]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#53B175'} />
      <Text style={styles.title}><FontAwesome5 name="carrot" size={50} color="white" /> nectar</Text>
      <Text style={styles.subtitle}>online groceries</Text>
    </View>
  );
};

export default Splash;
