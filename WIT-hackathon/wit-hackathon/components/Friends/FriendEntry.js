import * as React from 'react';
import { Text, View, StyleSheet, Image, Card, ScrollView, SafeAreaView } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export default function FriendEntry() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Kim
            </Text>
            <ProgressBar progress={0.90} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Shayla
            </Text>
            <ProgressBar progress={0.60} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Daniel
            </Text>
            <ProgressBar progress={0.25} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
        </View>
        <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Sabena
            </Text>
            <ProgressBar progress={0.60} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Kim
            </Text>
            <ProgressBar progress={0.60} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Shayla
            </Text>
            <ProgressBar progress={0.60} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
           <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Daniel
            </Text>
            <ProgressBar progress={0.60} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
           <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Sabena
            </Text>
            <ProgressBar progress={0.60} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
           <View style={styles.featureRow}>
            <Text style={styles.paragraph}>
            Kim
            </Text>
            <ProgressBar progress={0.60} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  featureRow: {
    margin: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  }, 
  paragraph: {
    margin: 5,
    paddingTop: 4,
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  scrollView: {
    marginHorizontal: 10,
  },
});
