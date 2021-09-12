import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import ProgressBar from 'react-native-progress/Bar';

const Stats = ({ stats }) => {
  const frac = stats.cur / stats.max;
  const percent = Math.floor(frac * 100);
  return (
    <>
      <Text style={styles.entry}>
        {stats.text}: {stats.cur}/{stats.max} {stats.unit}
        <ProgressBar progress={frac} color={'#91F988'} borderColor={'#C4C4C4'} unfilledColor={'#C4C4C4'} />
        <>{percent}%</>
        {stats.editable && (
          <>
            <Button style={styles.buttonGreen}>
              <Text> + </Text>
            </Button>
            <Button style={styles.buttonRed}>
              <Text> - </Text>
            </Button>
          </>
        )}
      </Text>
    </>
  );
};

export default Stats;

const styles = StyleSheet.create({
  entry: {
    margin: 15,
    padding: 20,
    backgroundColor: '#E5E5E5',
  },
  buttonGreen: {
    backgroundColor: '#91F988',
    padding: 10,
  },
  buttonRed: {
    backgroundColor: '#FF4747',
    padding: 10,
  }
});