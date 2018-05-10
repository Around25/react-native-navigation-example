import React, { Component } from 'react'
import { View, StyleSheet, Button } from 'react-native'

import { logout } from '../../../api/auth'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLogout() {
    await logout();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.base}>
        <Button
         title='Logout'
         onPress={this.onLogout} />
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
