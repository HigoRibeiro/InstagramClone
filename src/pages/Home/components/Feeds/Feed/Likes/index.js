import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class Likes extends Component {
  render() {

    const { likes: { count } } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{count} curtida{ count === 1 ? '' : 's'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 13,
    color: '#222',
    fontWeight: 'bold',
  }
});