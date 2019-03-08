// import { combineReducers } from 'redux';
import CourseReducer from './CourseReducer';
import AuthReducer from './AuthReducer';
import StepReducer from './StepReducer';
import LessonReducer from './LessonReducer';
import TopicReducer from './TopicReducer';

export default {
  courses: CourseReducer,
  auth: AuthReducer,
  steps: StepReducer,
  lessons: LessonReducer,
  topics: TopicReducer,
};
