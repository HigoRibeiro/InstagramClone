import React, { Component } from 'react';
import {  View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

import Feed from './Feed';

export default class Feeds extends Component {

  state = {
    response: [],
    loading: true,
  }

  async componentDidMount() {
    const token = '7681278449.1677ed0.aa659e54ef464dfab35aa5644a4b126c';
    try {
      const response = await axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`);
      const data = response.data;
      this.setState({ response: data.data, loading: false });
    } catch (err) {
      // 
    }
  }

  render() {
    return (
      <View>
        { this.state.loading 
          ? <ActivityIndicator />
          : this.state.response.map( feed => <Feed key={feed.id} feed={feed} />)
        }
      </View>
    );
  }
}
