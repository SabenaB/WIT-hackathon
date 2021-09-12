import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, Image, Card, TouchableHighlight, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';

import Header from './Header';
import Tasks from './Tasks';

export default function FertilizerTabContent() {
  // const tasks = [
  //   {
  //     id: 1,
  //     text: 'Study',
  //     day: '13/09/2021',
  //   },
  //   {
  //     id: 2,
  //     text: 'Walk Max',
  //     day: '14/09/2021',
  //   },
  //   {
  //     id: 3,
  //     text: 'Buy Groceries',
  //     day: '16/09/2021',
  //   },
  // ];
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study',
      day: '13/09/2021',
    },
    {
      id: 2,
      text: 'Walk Max',
      day: '14/09/2021',
    },
    {
      id: 3,
      text: 'Buy Groceries',
      day: '16/09/2021',
    },
    {
      id: 4,
      text: 'Buy Flowers',
      day: '17/09/2021',
    },
    {
      id: 5,
      text: 'Drink Water',
      day: '17/09/2021',
    },
    {
      id: 6,
      text: 'Get a Haircut',
      day: '19/09/2021',
    },
    {
      id: 7,
      text: 'Watch Lectures',
      day: '20/09/2021',
    },
    {
      id: 8,
      text: "Celebrate Clover's Birthday",
      day: '20/09/2021',
    },
  ]);
  return (
    <View style={styles.container}>
      <Header title="Fertilizer Tasks" />
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <Tasks tasks={tasks} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F2F2F2',
    padding: 5,
    paddingBottom: 70
  },
  scrollView: {
    marginHorizontal: 10,
  },
});
