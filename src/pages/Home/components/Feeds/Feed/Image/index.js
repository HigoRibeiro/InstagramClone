import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class Image extends Component {
  render() {
    return (
      <View style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    height: 260,
  }
});
