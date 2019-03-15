import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarFeatherIcons } from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Course from '../screens/Course';
import CourseList from '../screens/CourseList';
import LoginForm from '../screens/LoginForm';
import Lesson from '../screens/Lesson';
import Topic from '../screens/Topic';

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
  tabBarIcon: ({ focused }) => (
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
  tabBarIcon: ({ focused }) => (
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
  tabBarIcon: ({ focused }) => (
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
    },
    headerMode: 'none',
  },
);
