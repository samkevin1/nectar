import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { DefaultTheme } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles';

const Home = ({ navigation }) => {

  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'}  barStyle={'dark-content'} />
      <FontAwesome5 style={styles.icon} name="carrot" size={40} color="black" />
      <View style={styles.searchSection}>
        <FontAwesome style={styles.searchIcon} name="search" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search store..."
          value={search}
          onChangeText={v => setSearch(v)}
          underlineColorAndroid="transparent"
          placeholderTextColor={'#7C7C7C'}
        />
      </View>
    </View>
  );
};

export default Home;
