import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';

export default function HomepageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cardLogo}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <Card style={styles.card}>
        <Text style={styles.paragraph}>
          Login or sign up
        </Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#35648F',
    textAlign: 'center',
    width: 375,
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#E5E5E5',
  },
  cardLogo: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#35648F',
    paddingTop: 10,
    paddingBottom: 60
  },
  card: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#E5E5E5',
  },
  logo: {
    height: 445,
    width: 350,
  }
});