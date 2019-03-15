import axios from 'axios';

import NavigationService from '../config/NavigationService';
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
} from './types';
import { signIn, getToken } from '../config/LoginUtils';
import { domain, API, endpoint } from '../config/app.json';

export const usernameChanged = text => ({
  type: USERNAME_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({ username, password }) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });

  const token = await getToken();
  const authUser = JSON.parse(token);

  if (token) {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: authUser });
  } else {
    handleLoginUser(dispatch, username, password);
  }
};

const handleLoginUser = async (dispatch, username, password) => {
  await axios
    .post(domain.env.stage + API.WP + API.JWT + endpoint.token, {
      username,
      password,
    })
    .then((user) => {
      successUserLogin(dispatch, user);
    })
    .then(() => {
      NavigationService.navigate('Home');
    })
    .catch((error) => {
      dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data.message });
    });
};

const successUserLogin = async (dispatch, user) => {
  signIn(user.data);
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user.data });
};

export const logOutUser = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER_SUCCESS }, NavigationService.navigate('LoginForm'));
};
