import React, { Component } from 'react';
import { Image, Text, Dimensions } from 'react-native';

export default class MyImage extends Component {

  constructor(props) {
    super(props);

    const winWidth = Dimensions.get('window').width;
    const { images: { standard_resolution: { width, height } } } = props;
    const ratio = winWidth/width;
    this.state = {
      width: winWidth,
      height: height * ratio,
    };
  }

  render() {
    const { images: { standard_resolution: { url, height } } } = this.props;
    return (
      <Image 
        style={{...this.state}}
        source={{
          uri: url,
        }}
      />
    );
  }
}
