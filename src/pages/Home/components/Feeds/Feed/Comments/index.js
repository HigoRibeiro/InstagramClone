import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';

export default class Comments extends Component {

  renderCaption = () => {
    const { caption: { text, from: { username } } } = this.props;
    return (
      <Text style={styles.user}>{username}
        <Text style={styles.comment}> {text}</Text>
      </Text>
    )
  }
  render() {

    const { comments: { count } } = this.props;

    return (
      <View style={styles.container}>
        {this.props.caption && this.renderCaption()}
        <Text style={styles.otherComments}>Ver todos os {count} comentário{ count === 1 ? '' : 's'}...</Text>
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