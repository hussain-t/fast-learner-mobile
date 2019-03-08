import axios from 'axios';
import {
  TOPIC_FETCH_SUCCESS,
  TOPIC_FETCH_ALL_SUCCESS,
  TOPIC_FETCH_ALL_FAIL,
  TOPIC_FETCH_ALL_START,
  TOPIC_FETCH_ALL_DONE,
} from './types';
import { domain, API, endpoint } from '../config/app.json';

export const topicsFetchWithoutAuth = id => (dispatch) => {
  axios
    .get(`${domain.env.stage}${API.WP}${API.LD}${endpoint.topicDetails}${id}`)
    .then((topics) => {
      dispatch({ type: TOPIC_FETCH_SUCCESS, payload: topics.data });
    })
    .catch(error => console.log(error.response));
};

export const topicsFetch = (authToken, ids) => (dispatch) => {
  dispatch({
    type: TOPIC_FETCH_ALL_START,
  });

  if (ids.length === 0) {
    dispatch({
      type: TOPIC_FETCH_ALL_SUCCESS,
      payload: [],
    });
  }

  const getTopic = id => axios
    .get(`${domain.env.stage}${API.WP}${API.LD}${endpoint.topics}${id}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((topic) => {
      dispatch({
        type: TOPIC_FETCH_ALL_SUCCESS,
        payload: topic.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: TOPIC_FETCH_ALL_FAIL,
        error: error.response,
      });
    });

  Promise.all(ids.map(id => getTopic(id)))
    .then(() => dispatch({ type: TOPIC_FETCH_ALL_DONE }))
    .catch(error => console.log(error.response));
};
