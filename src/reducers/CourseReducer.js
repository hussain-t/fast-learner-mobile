import { COURSES_FETCH_SUCCESS, LOGOUT_USER_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COURSES_FETCH_SUCCESS:
      return action.payload;
    case LOGOUT_USER_SUCCESS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
