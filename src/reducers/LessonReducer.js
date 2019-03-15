import {
  LESSON_FETCH_ALL_SUCCESS,
  LESSON_FETCH_ALL_START,
  LESSON_FETCH_ALL_FAIL,
  LESSON_FETCH_ALL_DONE,
  LESSON_TITLES_FETCH,
  LOGOUT_USER_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LESSON_FETCH_ALL_START:
      const courses = state.data.filter(item => item.courseId === action.courseId);
      if (courses.length > 0) {
        const course = courses[0];
        course.isLoading = true;
        course.lessons = [];
        course.error = null;

        return Object.assign({}, state, {
          data: [...state.data.filter(c => c.courseId !== action.courseId), course],
        });
      }
      return Object.assign({}, state, {
        data: [
          ...state.data,
          {
            courseId: action.courseId,
            lessons: [],
            isLoading: true,
            error: null,
          },
        ],
      });

    case LESSON_FETCH_ALL_SUCCESS:
      const courses1 = state.data.filter(item => item.courseId === action.payload.courseId);
      const course1 = courses1[0];

      course1.isLoading = false;
      course1.error = null;

      if (action.payload.lesson.length === 0) course1.lessons = [];
      else {
        course1.lessons = [
          ...course1.lessons.filter(l => l.id !== action.payload.lesson.id),
          action.payload.lesson,
        ];
      }

      return Object.assign({}, state, {
        data: [...state.data.filter(c => c.courseId !== action.payload.courseId), course1],
      });

    case LESSON_FETCH_ALL_FAIL:
      const courses2 = state.data.filter(item => item.courseId === action.payload.courseId);

      if (courses2.length) {
        const course2 = courses2[0];

        course2.isLoading = false;
        course2.lessons = [];
        course2.error = action.payload.error;

        return Object.assign({}, state, {
          data: [...state.data.filter(c => c.courseId !== action.payload.courseId), course2],
        });
      }

      return state;
    case LESSON_TITLES_FETCH:
      return { ...state, lessonTitles: action.payload };
    case LOGOUT_USER_SUCCESS:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
