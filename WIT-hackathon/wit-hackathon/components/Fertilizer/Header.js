import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Card,
  TouchableHighlight,
} from 'react-native';

import Button from './Button';

const Header = ({ title }) => {
  return (
    <>
      <Text style={styles.paragraph}>{title}</Text>
      <Button color="#8cff66" title="Add Fertilizer Task" />
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#E5E5E5',
  },
});
