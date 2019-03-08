import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIonicons, TabBarFeatherIcons } from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Course from '../screens/Course';
import CourseList from '../screens/CourseList';
import LoginForm from '../screens/LoginForm';
import Lesson from '../screens/Lesson';
import Topic from '../screens/Topic';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

export const LoginStack = createStackNavigator(
  {
    LoginForm: {
      screen: LoginForm,
      navigationOptions: {
        headerTitle: 'Login',
        headerLeft: null,
        headerStyle: {
          backgroundColor: '#a65aff',
        },
        headerTintColor: '#FFFFFF',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#a65aff',
        },
        headerTintColor: '#FFFFFF',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

HomeStack.navigationOptions = {
  // tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={`${ICON_PREFIX}-home${focused ? '' : '-outline'}`} />
    <TabBarFeatherIcons focused={focused} name="home" />
  ),
};

const CoursesStack = createStackNavigator(
  {
    Courses: {
      screen: CourseList,
      navigationOptions: {
        headerTitle: 'Courses',
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#a65aff',
        },
        headerTintColor: '#FFFFFF',
      },
    },
    Course: {
      screen: Course,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerStyle: {
          backgroundColor: '#a65aff',
        },
        headerTintColor: '#FFFFFF',
      }),
    },
    Lesson: {
      screen: Lesson,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerStyle: {
          backgroundColor: '#a65aff',
        },
        headerTintColor: '#FFFFFF',
      }),
    },
    Topic: {
      screen: Topic,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerStyle: {
          backgroundColor: '#a65aff',
        },
        headerTintColor: '#FFFFFF',
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

CoursesStack.navigationOptions = {
  // tabBarLabel: 'Courses',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={`${ICON_PREFIX}-options${focused ? '' : '-outline'}`} />
    <TabBarFeatherIcons focused={focused} name="book" />
  ),
};

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        headerTitle: 'Settings',
        headerLeft: null,
        gesturesEnabled: false,
        headerStyle: {
          backgroundColor: '#a65aff',
        },
        headerTintColor: '#FFFFFF',
      },
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

SettingsStack.navigationOptions = {
  // tabBarLabel: 'Settings',

  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={`${ICON_PREFIX}-settings${focused ? '' : '-outline'}`} />
    <TabBarFeatherIcons focused={focused} name="settings" />
  ),
};

export const BottomTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    CoursesStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      showLabel: false,
      // activeTintColor: 'tomato',
      // inactiveTintColor: 'gray',
    },
    headerMode: 'none',
  },
);

// export const createStackNavigator({
//   LoginStack,
//   BottomTabNavigator,
// });

// import React from 'react';
// import {
//   StatusBar, TouchableOpacity, Text, View, Keyboard,
// } from 'react-native';
// import { createStackNavigator, NavigationActions } from 'react-navigation';
// import { MaterialIcons } from '@expo/vector-icons';
// import Course from '../screens/Course';
// import CourseList from '../screens/CourseList';
// import LoginForm from '../screens/LoginForm';
// import Lesson from '../screens/Lesson';
// import Topic from '../screens/Topic';
// import DismissableStackNavigator from './DismissableStackNavigator';

// const MainCardStack = createStackNavigator(
//   {
//     LoginForm: {
//       screen: LoginForm,
//       navigationOptions: {
//         headerTitle: 'Login',
//         headerLeft: null,
//       },
//     },
//     Courses: {
//       screen: CourseList,
//       navigationOptions: {
//         headerTitle: 'Courses',
//         headerLeft: null,
//         gesturesEnabled: false,
//       },
//     },
//     Course: {
//       screen: Course,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title,
//       }),
//     },
//     Lesson: {
//       screen: Lesson,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title,
//       }),
//     },
//   },
//   { headerMode: 'screen' },
// );

// const MainModalStack = createStackNavigator(
//   {
//     Topic: {
//       screen: Topic,
//       navigationOptions: ({ navigation }) => ({
//         headerTitle: navigation.state.params.title,
//         headerLeft: (
//           <View>
//             <TouchableOpacity
//               onPress={() => navigation.dispatch(NavigationActions.back(Keyboard.dismiss()))}
//             >
//               <View style={{ flexDirection: 'row' }}>
//                 <MaterialIcons name="navigate-before" size={32} color="#007aff" />
//                 <Text style={{ color: '#007aff', fontSize: 18, paddingTop: 7 }}>Back</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         ),
//       }),
//     },
//   },
//   { headerMode: 'screen' },
// );

// const Router = createStackNavigator(
//   {
//     MainCardStack: {
//       screen: MainCardStack,
//     },
//     MainModalStack: {
//       screen: MainModalStack,
//     },
//   },
//   {
//     mode: 'modal',
//     // cardStyle: {
//     //   paddingTop: StatusBar.currentHeight,
//     // },
//     headerMode: 'none',
//   },
// );

// export default Router;
