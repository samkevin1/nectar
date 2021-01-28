import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import { Routes } from './src/Navigation';
import Contexts from './src/Contexts';

export default function App() {

  const [loaded] = useFonts({
    Gilroy_ExtraBold: require('./src/assets/fonts/Gilroy-ExtraBold.ttf'),
    Gilroy_Light: require('./src/assets/fonts/Gilroy-Light.ttf'),
    Gilroy_Black: require('./src/assets/fonts/Gilroy-Black.ttf'),
    Gilroy_BlackItalic: require('./src/assets/fonts/Gilroy-BlackItalic.ttf'),
    Gilroy_Bold: require('./src/assets/fonts/Gilroy-Bold.ttf'),
    Gilroy_Heavy: require('./src/assets/fonts/Gilroy-Heavy.ttf'),
    Gilroy_Medium: require('./src/assets/fonts/Gilroy-Medium.ttf'),
    Gilroy_Regular: require('./src/assets/fonts/Gilroy-Regular.ttf'),
    Gilroy_SemiBold: require('./src/assets/fonts/Gilroy-Regular.ttf'),
    Gilroy_Thin: require('./src/assets/fonts/Gilroy-Thin.ttf'),
    Gilroy_UltraLight: require('./src/assets/fonts/Gilroy-UltraLight.ttf')
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <Contexts>
      <View style={styles.container}>
        <Routes />
      </View>
    </Contexts>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
