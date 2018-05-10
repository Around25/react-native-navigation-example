import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text>{'This is the logged in side'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
