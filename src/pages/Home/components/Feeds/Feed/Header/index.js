import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentLeft}>
          <View style={styles.wrapperImage}>
            <View style={styles.image}/>
          </View>
          <Text style={styles.text}>user</Text>
        </View>
        <Icon name="ellipsis-v" size={14} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 10,
  },
  contentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperImage: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: 'red',
    borderWidth: 1,
    marginRight: 5,
  },
  image: {
    width: 26,
    height: 26,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'black',
  },
  text: {
    color: '#222',
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 13,
  }
});
