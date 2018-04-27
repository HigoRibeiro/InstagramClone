import React, { Component } from 'react';
import {  ScrollView, Text, } from 'react-native';

import Stories from './components/Stories';
import Feeds from './components/Feeds';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Stories />
        <Feeds />
        <Feeds />
        <Feeds />
        <Feeds />
      </ScrollView>
    );
  }
}
