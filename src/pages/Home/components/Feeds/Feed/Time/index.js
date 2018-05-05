import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

export default class Time extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
        {
          moment
            .unix(this.props.created_time)
            .startOf('hour')
            .fromNow()
        }
        </Text>
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
