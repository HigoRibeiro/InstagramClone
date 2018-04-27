import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import Stories from './components/Stories';
import Feeds from './components/Feeds';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Stories />
        <Feeds />
      </View>
    );
  }
}
