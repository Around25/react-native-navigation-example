import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

import { login } from '../../api/auth'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  async onLogin() {
    await login();
    this.props.navigation.navigate('Dashboard');
  }

  render() {
    return (
      <View style={styles.base}>
        <Button
          title='Login'
          onPress={this.onLogin}/>
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
