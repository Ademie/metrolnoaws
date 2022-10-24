import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  // HOMESCREEN
  top: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bar: {
    fontSize: 15,
  },
  bgred:{
    backgroundColor: '#f73d67',
    // backgroundColor: '#ef6685',
  },
  lightred:{
    backgroundColor: '#f73d675f',
    
  },
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    flex: 0,
    minWidth: '100%',
    width: 400,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  textInput: {
    backgroundColor: '#dddddf',
    borderRadius: 0,
    fontSize: 18,
  },
  gray: {
    backgroundColor: '#555',
    color: '#fff',
  },
  //   NAVOPTIONS
  center: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  rounded: {
    justifyContent: 'center',
    backgroundColor: '#f73d67',
    height: 35,
    width: 35,
    borderRadius: 50,
    overflow: 'hidden',
  },
  //   NAVFAVOURITES
  center: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  round: {
    marginRight: 7,
    justifyContent: 'center',
    backgroundColor: '#aaa',
    height: 45,
    width: 45,
    borderRadius: 50,
    overflow: 'hidden',
  },

  //   RIDECARD
  space:{
    marginBottom:120,
  }
});

export default styles;
