import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Story from './Story';

export default class Stories extends Component {
  render() {
    return (
      <View>
        <View style={styles.headerStorie}>
          <Text style={styles.headerText}>Histórias</Text>
          <Text style={styles.headerText}><Icon name="caret-right" size={14} color="#222" /> Assistir a tudo</Text>
        </View>
        <Story />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStorie: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#222'
  }
});
