import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { TextInput, DefaultTheme, Button } from 'react-native-paper';
import {
  useUserContext
} from "../../../Contexts/User";

import styles from './styles';

const theme = {
  ...DefaultTheme,
  roundness: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E2E2E2',
    accent: 'white',
    disabled: 'white',
    text: '#181725'
  },
};

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    token,
    useToken
  } = useUserContext();

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor='rgba(252, 252, 252, 0.6)' barStyle={'dark-content'} />
      <FontAwesome5 style={styles.icon} name="carrot" size={50} color="black" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Log in</Text>
        <Text style={styles.subtitle}>Enter your email and password</Text>
      </View>
      <View style={styles.credentials}>
        <View style={styles.emailContainer}>
          <Text style={styles.credentialsHeader}>Email</Text>
          <TextInput style={styles.input}
            placeholder='Type in your email'
            underlineColor='#E2E2E2'
            value={email}
            onChangeText={v => setEmail(v)}
            theme={theme}
          />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.credentialsHeader}>Password</Text>
          <TextInput style={styles.input}
            placeholder='Type in your password'
            underlineColor='#D3D3D3'
            theme={theme}
            onChangeText={v => setPassword(v)}
            value={password}
            secureTextEntry={true}
          />
        </View>
      </View>
      <Button 
        mode={'contained'} 
        style={styles.button} 
        color={'#53B175'} 
        labelStyle={styles.buttonText}
        uppercase={false}
        disabled={(email === '' || password === '')}
        onPress={() => useToken()}
      >
        Log In
      </Button>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.footerText, styles.footerTextGreen}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
