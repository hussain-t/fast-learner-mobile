import { combineReducers } from 'redux';
import CourseReducer from './CourseReducer';
import AuthReducer from './AuthReducer';
import LessonReducer from './LessonReducer';
import TopicReducer from './TopicReducer';

export default combineReducers({
  courses: CourseReducer,
  auth: AuthReducer,
  lessons: LessonReducer,
  topics: TopicReducer,
});
