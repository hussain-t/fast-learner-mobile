import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { loginUser } from '../actions';
import { getToken } from '../config/LoginUtils';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);

    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const token = await getToken();
    this.props.navigation.navigate(token ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default connect(
  null,
  { loginUser },
)(AuthLoadingScreen);
