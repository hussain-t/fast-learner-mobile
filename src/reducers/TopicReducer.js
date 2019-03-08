import {
  TOPIC_FETCH_SUCCESS,
  TOPIC_FETCH_ALL_SUCCESS,
  TOPIC_FETCH_ALL_START,
  TOPIC_FETCH_ALL_FAIL,
  TOPIC_FETCH_ALL_DONE,
  LOGOUT_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOPIC_FETCH_ALL_START:
      return { loading: true, data: [], error: null };
    case TOPIC_FETCH_ALL_SUCCESS:
      if (action.payload) {
        console.log('topic reducer', action.payload);
        return {
          data: [...state.data.filter(t => t.id !== action.payload.id), action.payload],
          error: null,
        };
      }
    case TOPIC_FETCH_ALL_DONE:
      return Object.assign({}, state, {
        loading: false,
      });
    case TOPIC_FETCH_ALL_FAIL:
      return { loading: false, data: [], error: action.error };
    case LOGOUT_USER_SUCCESS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
