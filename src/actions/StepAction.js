// import axios from 'axios';
// import { STEPS_FETCH_SUCCESS, STEPS_FETCH_START, STEPS_FETCH_FAIL } from './types';
// import { domain, API, endpoint } from '../config/app.json';

// const STEPS = '/steps';

// export const stepsFetch = ({ authToken, id }) => (dispatch) => {
//   dispatch({
//     type: STEPS_FETCH_START,
//   });

//   axios
//     .get(`${domain.env.stage}${API.WP}${API.LD}${endpoint.courses}${id}${STEPS}`, {
//       headers: { Authorization: `Bearer ${authToken}` },
//     })
//     .then((steps) => {
//       const data = { ...steps.data, courseId: id };
//       dispatch({
//         type: STEPS_FETCH_SUCCESS,
//         payload: data,
//       });
//     })
//     .catch((err) => {
//       dispatch({
//         type: STEPS_FETCH_FAIL,
//         error: err.response,
//       });
//     });
// };
