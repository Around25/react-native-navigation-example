import React, { Component } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import { getRootNavigator } from './navigator'
import { isLoggedIn } from './api/auth'

export default class Root extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;

    this.state = {
      loading: true,
      loggedIn: false
    };
  }

  async componentDidMount() {
    const loggedIn = await isLoggedIn();
    this.setState({ loggedIn, loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.base}>
          <ActivityIndicator size='small' />
        </View>
      )
    }

    const RootNavigator = getRootNavigator(this.state.loggedIn);
    return <RootNavigator />
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
