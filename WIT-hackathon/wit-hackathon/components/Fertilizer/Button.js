import React from 'react';
import { Text, View } from 'react-native';

const Button = ({ color, text }) => {
  return (
    <View style={{ backgroundColor: color }}>
      <Text>{text}</Text>
    </View>
  );
};

export default Button;
