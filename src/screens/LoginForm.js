import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

import axios from 'axios';
import { domain, API, endpoint } from '../config/app.json';

import { usernameChanged, passwordChanged, loginUser } from '../actions';
import { signIn, getToken } from '../config/LoginUtils';
import {
  Button, Card, CardSection, Input, Spinner,
} from '../components/common';
import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

const ICON_COLOR = '#A9A9A9';
const ICON_SIZE = 26;

class LoginForm extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  state = {
    errorAlert: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({ errorAlert: this.props.error });
    }
  }

  // -------------Without Redux-------------//

  // loginUser = async ({ username, password }) => {
  //   console.log('login');
  //   // axios.post('https://lexcampus.on-its-way.com/wp-json/jwt-auth/v1/token', {
  //   await axios
  //     .post(domain.env.stage + API.WP + API.JWT + endpoint.token, {
  //       username,
  //       password,
  //     })
  //     .then((user) => {
  //       // this.successUserLogin(user);
  //       signIn(user.data);
  //     })
  //     .then(() => {
  //       this.props.navigation.navigate('Home');
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };

  // successUserLogin = async (user) => {
  //   const { navigation } = this.props;
  //   signIn(user.data);
  //   const token = await getToken();
  //   console.log('token', JSON.parse(token));
  // };

  // -------------Without Redux-------------//

  onButtonPress = () => {
    const { username, password, loginUser } = this.props;

    loginUser({ username, password });
  };

  onUsernameChange = (text) => {
    this.props.usernameChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChanged(text);
  };

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress}>Log in</Button>;
  }

  renderError() {
    if (this.state.errorAlert) {
      this.props.alertWithType('error', 'Sorry!', this.props.error);
      this.setState({ errorAlert: '' });
    }
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <Card>
            <CardSection>
              <Input
                placeholder="john-doe"
                label={<AntDesign name="user" size={ICON_SIZE} color={ICON_COLOR} />}
                keyboardType="email-address"
                value={this.props.username}
                onChangeText={this.onUsernameChange}
              />
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                placeholder="password"
                label={<AntDesign name="lock1" size={ICON_SIZE} color={ICON_COLOR} />}
                value={this.props.password}
                onChangeText={this.onPasswordChange}
              />
            </CardSection>

            {this.renderError()}

            <CardSection>{this.renderButton()}</CardSection>
          </Card>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const {
    username, password, error, loading, success, id,
  } = auth;

  return {
    username,
    password,
    error,
    loading,
    success,
    id,
  };
};

export default connect(
  mapStateToProps,
  { usernameChanged, passwordChanged, loginUser },
)(connectAlert(LoginForm));
