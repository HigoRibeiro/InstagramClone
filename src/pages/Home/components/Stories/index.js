import React, { Component } from 'react';
import {  View, Text, ScrollView, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Story from './Story';

export default class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStorie}>
          <Text style={styles.headerText}>Histórias</Text>
          <Text style={styles.headerText}><Icon name="caret-right" size={14} color="#222" /> Assistir a tudo</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentScrollView}
        >
          <Story visualized user='Eu'/>
          <Story user='um.amigo'/>
          <Story user='um.amigo'/>
          <Story user='um.amigo'/>
          <Story visualized user='um.amigo'/>
          <Story user='um.amigo'/>
          <Story user='um.amigo'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 5,
  },
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
  },
  contentScrollView: {
    paddingHorizontal: 3,
  },
});
