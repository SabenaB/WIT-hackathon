import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
import ProgressBar from 'react-native-progress/Bar';
export default class GreenhouseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Image style={styles.item} source={require('../../assets/plant2.png')} />
        </Card>
        <Card style={styles.sunlight}>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Sunlight
            </Text>
            <ProgressBar progress={0.67} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
        </Card>
        <Card style={styles.steps}
        >
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Steps
            </Text>
            <ProgressBar progress={0.18} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
        </Card>
        <Card style={styles.water}>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Water
            </Text>
            <ProgressBar progress={0.5} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
        </Card>
        <Card style={styles.fertiliser}>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Fertiliser
            </Text>
            <ProgressBar progress={0.8} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
        </Card>
        <Card style={styles.sleep}>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Sleep
            </Text>
            <ProgressBar progress={0.75} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-evenly',
    paddingTop: 10,
    backgroundColor: '#F2F2F2',
    padding: 8,
  },
  card: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#35648F',
    height: 300,
  },
  sunlight: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFEE93',
    height: 45,
  },
  steps: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFD1A7',
    height: 45,
  },
  water: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFBABA',
    height: 45,
  },
  fertiliser: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFB8EF',
    height: 45,
  },
  sleep: {
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#DBBEFF',
    height: 45,
  },
  paragraph: {
    margin: 10,
    paddingTop: 4,
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  item: {
    height: 300,
    width: 342,
    padding: 0,
  },
  featureRow: {
    margin: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  }, 
});
