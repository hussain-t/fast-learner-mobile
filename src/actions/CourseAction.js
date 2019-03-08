import axios from 'axios';
import { COURSES_FETCH_SUCCESS } from './types';
import { domain, API, endpoint } from '../config/app.json';

export const coursesFetch = () => (dispatch) => {
  axios
    .get(domain.env.stage + API.WP + API.LD + endpoint.courses)
    // axios.get(domain.env.stage + API.WP + API.LD + endpoint.courses)
    .then((response) => {
      dispatch({
        type: COURSES_FETCH_SUCCESS,
        payload: response.data,
      });
    });
};
