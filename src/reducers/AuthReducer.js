import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  id: '',
  username: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  success: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: '',
        password: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...state,
        success: true,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      console.log('Authentication Failed!', action.payload);
      return {
        ...state,
        id: new Date().getUTCMilliseconds(),
        error: 'Authentication Failed!',
        password: '',
        loading: false,
      };
    case LOGOUT_USER_SUCCESS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
