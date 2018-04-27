import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class Story extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage} />
        <Text style={[styles.text, { color: this.props.visualized ? '#999' : '#222'}]}>{this.props.user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 7,
  },
  containerImage: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 4,
  },
  text: {
    fontSize: 10,
  }
});