
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: Dimensions.get('window').width + 2
  },
  bodyBottom: {
    flex: 0.5,
    alignItems: 'center'
  },
  bodyTop: {
    flex: 0.5
  },
  title: {
    fontFamily: 'Gilroy_Medium',
    color:'#FFFFFF',
    fontSize: 48,
  },
  subtitle: {
    fontFamily: 'Gilroy_Light',
    fontSize: 15,
    color: '#FFFFFF',
  },
  button: {
    color: '#53B175',
    width: 353,
    height: 67,
    borderRadius: 20,
    marginTop: 40,
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Gilroy_SemiBold',
    color: '#FFFFFF',
    fontSize: 18
  },
});

export default styles;