# fast-learner-mobile-app

Fast Learner - an eLearning mobile app with React Native and LearnDash

## Screenshots

<img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/login.PNG" alt="Login" width="250"> <img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/login-error.PNG" alt="Login Error" width="250"> <img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/home1.PNG" alt="Home 1" width="250">

<img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/home2.PNG" alt="Home 2" width="250"><img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/courses.PNG" alt="Courses" width="250"> <img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/course-details1.PNG" alt="Course Details 1" width="250">

<img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/course-details2.PNG" alt="Course Details 2" width="250"> <img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/protected-content.PNG" alt="Protected Content" width="250"> <img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/lesson.PNG" alt="Lesson" width="250">

<img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/topic.PNG" alt="Topic" width="250"> <img src="https://github.com/hussain-t/fast-learner-mobile/blob/master/src/screenshots/profile.PNG" alt="Profile" width="250">

## Prerequisites

Install and active the following plugins in your WordPress backend:

1. [WordPress JWT Authentication](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
2. [WordPress JWT Authentication Refresh Token](https://github.com/hussain-t/wp-jwt-auth-refresh-token)

**Note: You must have LearnDash plugin installed in your WordPress site.**

This project was bootstrapped with [Expo CLI](https://expo.io/tools#cli).
Download the [Expo Client](https://expo.io/tools#client)

## Run the project

```
$ npm install -g expo-cli
$ git clone https://github.com/hussain-t/fast-learner-mobile.git
$ cd fast-learner-mobile
$ npm install
$ expo start
```

Runs the app:<br>
Open [http://192.168.8.102:19001](http://192.168.8.102:19001)

Scan the QR code from you camera / expo client.<br>

### Change WordPress URL

Go to `app.json` file and change the `stage` value to yours.

## Covered features:

👉 WordPress Authentication (login) with JWT<br>
👉 Refresh token with my custom plugin [WordPress JWT Authentication Refresh Token](https://github.com/hussain-t/wp-jwt-auth-refresh-token)<br>
👉 Basic custom image swiper<br>
👉 Course list<br>
👉 Lesson and Topics<br>
👉 Protected content by user enrollment<br>
👉 Custom Vimeo video player<br>

## TODO

### Features

👉 User register<br>
👉 Offline persistent<br>
👉 Integrate bbPress forum<br>
👉 Add to cart course<br>
👉 checkout with payment gateway

### Upgrades

👉 Update Expo, React Navigations to newer version<br>
👉 Refactor with React Hooks<br>
👉 Replace REST API with [WPGraphQL](https://www.wpgraphql.com/)<br>
👉 Replace Redux with [Apollo GraphQL Client](https://www.apollographql.com/)

## Support

If you find any issues with this project, please report an issue at [GitHub Issues](https://github.com/hussain-t/fast-learner-mobile/issues)<br>
Thank you for checking out Fast Learner!
