import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Card, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homepage from './HomepageScreen';
import GreenHouse from './Greenhouse/GreenhouseScreen.js';
import Fertilizer from './Fertilizer/FertilizerTabContent.js';
import Friends from './Friends/FriendsScreen.js';
import Health from './Health/HealthTabContent';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Homepage/>
    </View>
  );
}

function GreenhouseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GreenHouse/>
    </View>
  );
}

function InputScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Health/>
    </View>
  );
}

function FriendsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Friends/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator styles={styles.tabBar}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}            
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={require('../assets/home-icon.png')                  
              }/>
         ), 
         tabBarLabel: 'Home'             
        }}
      />
      <Tab.Screen
        name="Greenhouse"
        component={GreenhouseScreen}            
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={require('../assets/tree-icon.png')                  
              }/>
         ), 
         tabBarLabel: 'Greenhouse'             
        }}
      />
      <Tab.Screen
        name="Health"
        component={InputScreen}            
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={require('../assets/list-icon.png')                  
              }/>
         ), 
         tabBarLabel: 'Health'             
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}            
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={styles.bottomTabIcon}
              source={require('../assets/friends-icon.png')                  
              }/>
         ), 
         tabBarLabel: 'Friends'             
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    padding: 20,
  },
  bottomTabIcon: {
    height: 30,
    width: 30,
    padding: 5,
  }
});
