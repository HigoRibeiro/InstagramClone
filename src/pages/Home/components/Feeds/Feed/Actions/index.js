import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Actions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLeft} >
          <Icon name="heart-o" size={20} color="#222" />
          <Icon name="comment-o" size={20} color="#222" />
          <Icon name="angle-double-right" size={20} color="#222" />
        </View>
        <Icon name="bookmark-o" size={20} color="#222" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 40,
  },
  containerLeft: {
    flexDirection: 'row',
    width: 78,
    justifyContent: 'space-between'
  }
});
