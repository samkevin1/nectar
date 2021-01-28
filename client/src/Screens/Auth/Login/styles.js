
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(252, 252, 252, 0.6)'
  },
  icon: {
    marginTop: 80,
    alignSelf: 'center'
  },
  titleContainer: {
    marginTop: 70,
    marginRight: 20,
    marginLeft: 20
  },
  title: {
    fontFamily: 'Gilroy_Medium',
    fontSize: 26,
    color: '#030303'
  },
  subtitle: {
    color: '#7C7C7C',
    fontFamily: 'Gilroy_Regular',
    fontSize: 16,
    marginTop: 10
  },
  credentials:{
    marginTop: 40,
  },
  credentialsHeader: {
    marginLeft: 20,
    color: '#7C7C7C',
    marginBottom: 10,
    fontFamily: 'Gilroy_Regular',
    fontSize: 16,
  },
  input: {
    alignSelf: 'center',
    height: 45,
    width: 375,
    borderRadius: 4,
    borderColor: 'rgba(252, 252, 252, 0.6)',
    borderWidth: 0.6,
    backgroundColor: 'rgba(252, 252, 252, 0.6)',
    fontSize: 10,
    fontWeight: '600',
  },
  emailContainer: {
    marginBottom: 30
  },
  passwordContainer: {
    marginBottom: 10
  },
  button: {
    color: '#53B175',
    width: 353,
    height: 67,
    borderRadius: 20,
    marginTop: 40,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    fontFamily: 'Gilroy_SemiBold',
    color: '#FFFFFF',
    fontSize: 18
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },
  footerText: {
    color: '#181725',
    fontFamily: 'Gilroy_Medium',
    fontSize: 14
  },
  footerTextGreen: {
    color: '#53B175'
  }
});

export default styles;