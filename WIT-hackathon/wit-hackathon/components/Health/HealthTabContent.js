import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import HealthStats from './HealthStats'

export default function HealthTabContent() {
  const [healthStats, setHealthStats] = useState([
    {
      text: 'Sunlight',
      cur: 20,
      max: 30,
      unit: 'mins',
      editable: false
    },
    {
      text: 'Steps',
      cur: 1800,
      max: 10000,
      unit: 'steps',
      editable: false
    },
    {
      text: 'Water',
      cur: 1000,
      max: 2000,
      unit: 'mL',
      editable: true,
    },
    {
      text: 'Fertiliser',
      cur: 8,
      max: 10,
      unit: 'activities',
      editable: false,
    },
    {
      text: 'Sleep Time',
      cur: 6,
      max: 8,
      unit: 'hours',
      editable: false,
    },
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Health Points</Text>
      <HealthStats healthStats={healthStats} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 5,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#E5E5E5',
  },
});