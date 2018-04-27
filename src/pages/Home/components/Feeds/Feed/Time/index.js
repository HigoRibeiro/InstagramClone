import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class Time extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>HÁ 9 MINUTOS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  text: {
    fontSize: 10,
    color: '#222',
  },
});
