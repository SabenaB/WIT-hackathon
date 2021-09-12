import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';
import Constants from 'expo-constants';
import ProgressBar from 'react-native-progress/Bar';

export default class GreenhouseScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Card style={styles.card}>
            <View style={styles.featureRow}>
              <Text style={styles.paragraph}>
              4/08/2021
              </Text>
              <View>
                <Text>Vitamin D          30</Text>
                <Text>Steps           30000</Text>
                <Text>Water            2400</Text>
                <Text>Fertiliser              2</Text>
                <Text>Sleep                 10</Text>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.featureRow}>
              <Text style={styles.paragraph}>
              3/08/2021
              </Text>
              <View>
                <Text>Vitamin D            3</Text>
                <Text>Steps                570</Text>
                <Text>Water             2009</Text>
                <Text>Fertiliser              7</Text>
                <Text>Sleep                   7</Text>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.featureRow}>
              <Text style={styles.paragraph}>
              2/08/2021
              </Text>
              <View>
                <Text>Vitamin D          23</Text>
                <Text>Steps             3456</Text>
                <Text>Water            1200</Text>
                <Text>Fertiliser             4</Text>
                <Text>Sleep                  8</Text>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.featureRow}>
              <Text style={styles.paragraph}>
              1/08/2021
              </Text>
              <View>
                <Text>Vitamin D          15</Text>
                <Text>Steps              8633</Text>
                <Text>Water            1900</Text>
                <Text>Fertiliser              6</Text>
                <Text>Sleep                   8</Text>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.featureRow}>
              <Text style={styles.paragraph}>
              31/07/2021
              </Text>
              <View>
                <Text>Vitamin D          27</Text>
                <Text>Steps           30000</Text>
                <Text>Water            2400</Text>
                <Text>Fertiliser              2</Text>
                <Text>Sleep                 10</Text>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.featureRow}>
              <Text style={styles.paragraph}>
              30/07/2021
              </Text>
              <View>
                <Text>Vitamin D          20</Text>
                <Text>Steps           10000</Text>
                <Text>Water            1300</Text>
                <Text>Fertiliser            10</Text>
                <Text>Sleep                  5</Text>
              </View>
            </View>
          </Card>
          <Card style={styles.card}>
            <View style={styles.featureRow}>
              <Text style={styles.paragraph}>
              29/07/2021
              </Text>
              <View>
                <Text>Vitamin D          27</Text>
                <Text>Steps             4567</Text>
                <Text>Water              234</Text>
                <Text>Fertiliser              2</Text>
                <Text>Sleep                 10</Text>
              </View>
            </View>
          </Card>
        </ScrollView>
      </SafeAreaView>
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
    backgroundColor: '#C9F0C6',
    height: 103,
    paddingTop: 10
  },
  paragraph: {
    margin: 10,
    paddingTop: 4,
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  featureRow: {
    margin: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  }, 
  scrollView: {
    marginHorizontal: 10,
  },
});