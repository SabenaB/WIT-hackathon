import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

const Task = ({ task }) => {
  return (
    <>
      <Text style={styles.entry}>{task.id}. {task.text} on {task.day} </Text>
    </>
  );
};

const styles = StyleSheet.create({
  entry: {
    margin: 10,
    padding: 20,
    backgroundColor: '#E5E5E5',
  },
  x: {
    margin: 10,
    padding: 20,
    backgroundColor: '#E5E5E5',
    justifyContent: 'flex-end'
  },
});

export default Task;
