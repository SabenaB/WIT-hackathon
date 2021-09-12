import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import FriendEntry from './FriendEntry.js'

export default function FriendsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Your Sol-MATES Network
      </Text>
      <View style={styles.shelfbox}>
        <View style={styles.plantrow}>
          <Image style={styles.item} source={require('../../assets/plant3.png')} />
          <Image style={styles.item} source={require('../../assets/plant1.png')} />
          <Image style={styles.item} source={require('../../assets/plant2.png')} />
        </View>
        <Card style={styles.shelf}>
        </Card>
      </View>
      <View style={styles.shelfbox}>
        <View style={styles.plantrow}>
          <Image style={styles.item} source={require('../../assets/plant4.png')} />
          <Image style={styles.item} source={require('../../assets/plant2.png')} />
          <Image style={styles.item} source={require('../../assets/plant4.png')} />
        </View>
        <Card style={styles.shelf}>
        </Card>
      </View>
      <View style={styles.shelfbox}>
        <View style={styles.plantrow}>
          <Image style={styles.item} source={require('../../assets/plant5.png')} />
          <Image style={styles.item} source={require('../../assets/plant3.png')} />
          <Image style={styles.item} source={require('../../assets/plant3.png')} />
        </View>
        <Card style={styles.shelf}>
        </Card>
      </View>
      <View style={styles.leaderboardBox}>
        <Text style={styles.paragraph}>
          Leaderboard
        </Text>
        <FriendEntry/>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#E5E5E5',
  },
  shelfbox: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  plantrow: {
    margin: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#F2F2F2',  
  }, 
  shelf: {
    margin: 0,
    flexDirection: 'row',
    height: 20,
    backgroundColor: '#35648F',
  }, 
  item: {
    height: 100,
    width: 100,
    padding: 0,
  },
  leaderboardBox: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
});
