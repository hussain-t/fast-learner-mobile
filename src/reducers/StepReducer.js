// import { STEPS_FETCH_SUCCESS, STEPS_FETCH_START, STEPS_FETCH_FAIL } from '../actions/types';

// const INITIAL_STATE = {
//   isLoading: false,
//   data: [],
//   error: null,
// };

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case STEPS_FETCH_START:
//       const courses = state.data.filter(item => item.courseId === action.courseId);
//       if (courses.length > 0) {
//         const course = courses[0];
//         course.isLoading = true;
//         course.steps = null;

//         return Object.assign({}, state, {
//           error: null,
//           data: [...state.data.filter(c => c.id !== action.courseId), course],
//         });
//       }
//       return Object.assign({}, state, {
//         error: null,
//         data: [
//           ...state.data,
//           {
//             courseId: action.courseId,
//             step: [],
//             isLoading: true,
//           },
//         ],
//       });
//     // return {
//     //   isLoading: true,
//     //   data: [],
//     // };
//     case STEPS_FETCH_SUCCESS:
//       const courses1 = state.data.filter(item => item.courseId === action.payload.courseId);
//       const course1 = courses1[0];

//       course1.isLoading = false;

//       course1.steps = action.payload.payload;

//       return Object.assign({}, state, {
//         error: null,
//         data: [...state.data.filter(c => c.courseId !== action.payload.courseId), course1],
//       });

//     // return {
//     //   isLoading: false,
//     //   data: action.payload,
//     // };
//     case STEPS_FETCH_FAIL:
//       return {
//         isLoading: false,
//         data: [],
//       };
//     default:
//       return state;
//   }
// };
