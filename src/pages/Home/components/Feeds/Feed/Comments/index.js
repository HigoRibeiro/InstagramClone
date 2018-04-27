import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class Comments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.user}>user
          <Text style={styles.comment}> Essa é uma foto legal</Text>
        </Text>
        <Text style={styles.otherComments}>Ver todos os 10 comentários...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  user: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222',
  },
  comment: {
    fontWeight: 'normal',
  },
  otherComments: {
    marginTop: 5,
    color: '#aaa',
    fontSize: 13,
  },
});