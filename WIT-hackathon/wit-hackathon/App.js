import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Logo from './components/Logo';
import MenuBar from './components/MenuBar';
import FriendsPage from './components/Friends/FriendsScreen';
import History from './components/History/HistoryScreen';
import Fertilizer from './components/Fertilizer/FertilizerTabContent';
import Greenhouse from './components/Greenhouse/GreenhouseScreen';
import Health from './components/Health/HealthTabContent';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuBar/>
    </View>
    // <View style={styles.container}>
    //   <Fertilizer/>
    // </View>
    // <View style={styles.container}>
    //   <History/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#35648F',
    padding: 8,
  },
  // paragraph: {
  //   margin: 10,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   backgroundColor: '#E5E5E5',
  // },
  // card: {
  //   margin: 8,
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   backgroundColor: '#E5E5E5',
  // }, 
  // menu: {
  //   padding: 0,
  //   justifyContent: 'flex-end',
  // }
});
