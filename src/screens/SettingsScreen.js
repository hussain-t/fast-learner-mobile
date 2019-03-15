import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { UserSnippet } from '../components/UserSnippet';
import { logOutUser } from '../actions';
import { getToken, signOut } from '../config/LoginUtils';

const ICON_COLOR = '#FFFFFF';
const ICON_SIZE = 24;

class SettingsScreen extends Component {
  state = {
    name: '',
  };

  componentDidMount() {
    this.getUserDisplayName();
  }

  getUserDisplayName = async () => {
    const name = await getToken();
    const username = JSON.parse(name);
    this.setState({ name: username.user_display_name });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content" />
        <UserSnippet username={this.state.name} />
        <TouchableOpacity
          onPress={() => {
            signOut();
            this.props.logOutUser();
          }}
        >
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Log out</Text>
            <AntDesign name="logout" size={ICON_SIZE} color={ICON_COLOR} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  contentTextStyle: {
    padding: 10,
    fontSize: 18,
    fontFamily: 'open-sans-regular',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 40,
    backgroundColor: '$primaryPurple',
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'open-sans-regular',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
});

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(
  mapStateToProps,
  { logOutUser },
)(SettingsScreen);
