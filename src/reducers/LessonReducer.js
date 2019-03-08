// import {
//   LESSON_FETCH_ALL_SUCCESS,
//   LESSON_FETCH_ALL_START,
//   LESSON_FETCH_ALL_FAIL,
//   LESSON_FETCH_ALL_DONE,
//   LESSON_RESET,
// } from '../actions/types';

// const INITIAL_STATE = {
//   isLoading: false,
//   data: [],
//   error: null,
//   courseId: null,
// };

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case LESSON_FETCH_ALL_START:
//       return {
//         isLoading: true,
//         error: null,
//         data: [],
//         courseId: action.courseId,
//       };
//     // case LESSON_RESET:
//     //   console.log('LESSON_RESET');
//     //   return {
//     //     isLoading: false,
//     //     error: null,
//     //     data: [],
//     //     isReset: true,
//     //   };
//     case LESSON_FETCH_ALL_SUCCESS:
//       if (action.payload.lesson.length) {
//         return {
//           // isLoading: false,
//           data: [
//             ...state.data.filter(l => l.id !== action.payload.lesson.id),
//             action.payload.lesson,
//           ],
//           error: null,
//           courseId: action.payload.courseId,
//         };
//       }

//       // console.log('LessonReducer.action', action);
//       return {
//         error: null,
//         data: [],
//         courseId: action.payload.courseId,
//       };
//     case LESSON_FETCH_ALL_DONE:
//       console.log('LESSON_FETCH_ALL_DONE.action', action);
//       console.log('LESSON_FETCH_ALL_DONE.state', state);

//       return Object.assign({}, state, {
//         isLoading: false,
//         error: null,
//         courseId: action.courseId,
//       });
//     case LESSON_FETCH_ALL_FAIL:
//       return {
//         isLoading: false,
//         error: action.payload.error,
//         data: [],
//         courseId: action.payload.courseId,
//       };
//     default:
//       return state;
//   }
// };

// ===============OLD CODE=======================

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

      // case LESSON_FETCH_ALL_DONE:
      //   return Object.assign({}, state, {
      //     isLoading: false,
      //     error: null,
      //   });

    case LESSON_FETCH_ALL_FAIL:
      const courses2 = state.data.filter(item => item.courseId === action.payload.courseId);
      console.log('LESSON_FETCH_ALL_FAIL', courses2);

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
