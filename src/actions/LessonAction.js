import axios from 'axios';
import {
  LESSON_FETCH_SUCCESS,
  LESSON_FETCH_ALL_SUCCESS,
  LESSON_FETCH_ALL_FAIL,
  LESSON_FETCH_ALL_START,
  LESSON_FETCH_ALL_DONE,
  LESSON_TITLES_FETCH,
  LESSON_RESET,
} from './types';
import { domain, API, endpoint } from '../config/app.json';

export const resetLesson = () => (dispatch) => {
  dispatch({
    type: LESSON_RESET,
  });
};
export const lessonsFetch = (authToken, ids, courseId) => (dispatch) => {
  dispatch({
    type: LESSON_FETCH_ALL_START,
    courseId,
  });

  if (ids.length === 0) {
    dispatch({
      type: LESSON_FETCH_ALL_SUCCESS,
      payload: {
        lesson: [],
        courseId,
      },
    });

    dispatch({
      type: LESSON_FETCH_ALL_DONE,
      courseId,
    });
  }

  const getLesson = id => axios
    .get(`${domain.env.stage}${API.WP}${API.LD}${endpoint.lessons}${id}`, {
      headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((lesson) => {
      const data = {
        lesson: lesson.data,
        courseId,
      };

      dispatch({
        type: LESSON_FETCH_ALL_SUCCESS,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LESSON_FETCH_ALL_FAIL,
        payload: {
          error: err.response,
          courseId,
        },
      });

      throw err;
    });

  Promise.all(ids.map(id => getLesson(id)))
    .then(() => dispatch({ type: LESSON_FETCH_ALL_DONE, courseId }))
    .catch(error => console.log(error.response));
};

export const lessonTitlesFetch = courseId => (dispatch) => {
  axios
    .get(domain.env.stage + API.WP + API.LD + endpoint.courseLessons + courseId)
    .then((response) => {
      dispatch({
        type: LESSON_TITLES_FETCH,
        payload: response.data,
      });
    });
};
