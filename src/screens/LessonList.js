// import React, { Component } from 'react';
// import {
//   Text, FlatList, TouchableOpacity, View,
// } from 'react-native';
// import { connect } from 'react-redux';
// import { lessonsFetch, resetLesson } from '../actions';
// import { CardSection, Card, Spinner } from '../components/common';
// import NavigationService from '../config/NavigationService';

// class LessonList extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       courseId: this.props.courseId,
//     };

//     const authToken = this.props.auth.user.token;
//     const ids = this.props.steps.t['sfwd-lessons'];

//     // const course = this.getCourse(this.props.courseId);
//     // if (!course || !course.isLoading) {
//     console.log('course id is loading...', this.state.courseId);
//     this.props.lessonsFetch(authToken, ids, this.state.courseId);
//   }

//   componentWillMount() {}

//   componentDidMount() {
//     // const authToken = this.props.auth.user.token;
//     // const ids = this.props.steps.t['sfwd-lessons'];
//     // // const course = this.getCourse(this.props.courseId);
//     // // if (!course || !course.isLoading) {
//     // console.log('course id is loading...', this.state.courseId);
//     // this.props.lessonsFetch(authToken, ids, this.state.courseId);
//     // }
//     // this.props.lessonsFetchWithoutAuth(this.props.courseId);
//   }

//   componentWillUnmount() {
//     // console.log('componentWillUnmount', this.props.courseId);
//     // if (!this.props.lessons.isReset) {
//     //   this.props.resetLesson();
//     // }
//   }

//   onLessonPress = (lesson) => {
//     NavigationService.navigate('Lesson', {
//       lesson,
//       title: lesson.title.rendered,
//       steps: this.props.steps,
//     });
//   };

//   renderLesson = (lesson) => {
//     console.log('lesson 1', lesson.item.title.rendered);
//     return (
//       <TouchableOpacity onPress={() => this.onLessonPress(lesson.item)}>
//         <CardSection>
//           <Text style={styles.textStyle}>{lesson.item.title.rendered}</Text>
//         </CardSection>
//       </TouchableOpacity>
//     );
//   };

//   getCourse = (courseId) => {
//     const courses = this.props.lessons.data.filter(l => l.courseId === courseId);
//     if (courses.length === 0) return null;

//     return courses[0];
//   };

//   render() {
//     const { lessons } = this.props;
//     // const lessonList = Object.values(lessons);
//     const ids = this.props.steps.t['sfwd-lessons'];

//     // const course = this.getCourse(courseId);
//     // if (!course || course.isLoading) {
//     //   return (
//     //     <View style={{ flex: 1 }}>
//     //       <Spinner size="large" />
//     //     </View>
//     //   );
//     // }

//     console.log('Lesson.Render', this.state.courseId);

//     // console.log('Lessons.Props', this.props);
//     if (lessons.isLoading) {
//       return <Spinner size="large" />;
//     }

//     if (lessons.courseId !== this.state.courseId) {
//       return <Spinner size="large" />;
//     }

//     // order by lesson id
//     const lessonsData = ids.map(id => lessons.data.filter(l => l.id === id)[0]).filter(l => l);

//     console.log('lessonsData', lessonsData);

//     return (
//       <Card>
//         {lessonsData.length > 0 && (
//           <View>
//             <CardSection>
//               <Text style={styles.labelStyle}>Lessons</Text>
//             </CardSection>
//             <FlatList
//               data={lessonsData}
//               renderItem={this.renderLesson}
//               keyExtractor={(lesson, index) => index.toString()}
//             />
//           </View>
//         )}

//         {lessons.error ? (
//           <CardSection>
//             <Text style={styles.labelStyle}>Enroll to course to view the lessons</Text>
//           </CardSection>
//         ) : (
//           <CardSection>
//             <Text style={styles.labelStyle}>No Lessons found</Text>
//           </CardSection>
//         )}

//         {/* {(!lessons.error || lessonsData.length === 0) && (

//         )} */}
//       </Card>
//     );
//   }
// }

// const mapStateToProps = ({ auth, lessons }) => ({ auth, lessons });

// const styles = {
//   textStyle: {
//     paddingVertical: 15,
//     paddingLeft: 10,
//     fontSize: 18,
//   },
//   labelStyle: {
//     paddingTop: 15,
//     paddingBottom: 15,
//     paddingLeft: 10,
//     fontSize: 20,
//     fontWeight: '600',
//   },
// };

// export default connect(
//   mapStateToProps,
//   { lessonsFetch, resetLesson },
// )(LessonList);

// ===============OLD CODE=======================

import React, { Component } from 'react';
import {
  Text, FlatList, TouchableOpacity, View, Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { getToken } from '../config/LoginUtils';
import { lessonsFetch, lessonTitlesFetch } from '../actions';
import { CardSection, Card, Spinner } from '../components/common';
import { ListItem, Separator } from '../components/List';
import NavigationService from '../config/NavigationService';
import { decodeEntities } from '../helper';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 24;

class LessonList extends Component {
  async componentDidMount() {
    const {
      steps, lessonsFetch, lessonTitlesFetch, courseId,
    } = this.props;

    const token = await getToken();
    const authToken = JSON.parse(token);

    // const authToken = this.props.auth.user.token;
    const ids = steps.t['sfwd-lessons'];
    const course = this.getCourse(courseId);

    if (!course || !course.isLoading) {
      lessonsFetch(authToken.token, ids, courseId);
      lessonTitlesFetch(courseId);
    }

    // this.props.lessonsFetchWithoutAuth(this.props.courseId);
  }

  onLessonPress = (lesson) => {
    NavigationService.navigate('Lesson', {
      lesson,
      // title: lesson.title.rendered,
      steps: this.props.steps,
    });
  };

  renderLesson = (lesson) => {
    console.log('lesson 1', lesson.item.title.rendered);
    // return (
    // <TouchableOpacity onPress={() => this.onLessonPress(lesson.item)}>
    //   <CardSection>
    //     <Text style={styles.textStyle}>{lesson.item.title.rendered}</Text>
    //   </CardSection>
    // </TouchableOpacity>
    // );
  };

  renderItem = (item) => {
    const lesData = this.props.steps.h['sfwd-lessons'];
    const topicIds = [];

    Object.entries(lesData).forEach(([key, value]) => {
      if (key === item.id.toString()) {
        topicIds.push(Object.keys(value['sfwd-topic']));
        console.log('topicIds', topicIds[0].length);
      }
    });
    return (
      <ListItem
        text={decodeEntities(item.title.rendered)}
        subText={`${topicIds[0].length} topics`}
        selected
        onPress={() => this.onLessonPress(item)}
        iconBackground="#28a745"
        customIcon={<MaterialIcons name="playlist-play" color={ICON_COLOR} size={ICON_SIZE} />}
      />
    );
  };

  renderLessonTitles = item => {
    return (
      <ListItem
        text={decodeEntities(item)}
        // subText={`${topicIds[0].length} topics`}
        // onPress={() => this.onLessonPress(item)}
        customIcon={<MaterialIcons name="lock-outline" color={ICON_COLOR} size={ICON_SIZE} />}
      />
    )
  }

  getCourse = (courseId) => {
    const courses = this.props.lessons.data.filter(l => l.courseId === courseId);
    if (courses.length === 0) return null;

    return courses[0];
  };

  render() {
    const { lessons, courseId } = this.props;
    console.log('lessons', lessons);
    // const lessonList = Object.values(lessons);
    const ids = this.props.steps.t['sfwd-lessons'];

    console.log('LessonList.0000', this.props);

    const course = this.getCourse(courseId);
    if (!course || course.isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner size="large" />
        </View>
      );
    }

    console.log('course', course);

    // order by lesson id
    const lessonsData = ids.map(id => course.lessons.filter(l => l.id === id)[0]).filter(l => l);

    console.log('lessonsdata', lessonsData);

    if (course.error) {
      return (
        <View>
          <CardSection>
            <Text style={styles.labelStyle}>Enroll to course to view the lesson Topics</Text>
          </CardSection>
          <FlatList
            data={lessons.lessonTitles}
            renderItem={({ item }) => this.renderLessonTitles(item)}
            keyExtractor={(lesson, index) => index.toString()}
            ItemSeparatorComponent={Separator}
          />
        </View>
      );
    }

    if (lessonsData.length === 0) {
      return (
        <Card>
          <CardSection>
            <Text style={styles.labelStyle}>No Lessons found</Text>
          </CardSection>
        </Card>
      );
    }

    return (
      <View>
        <CardSection>
          <Text style={styles.labelStyle}>Lessons</Text>
        </CardSection>
        <FlatList
          data={lessonsData}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(lesson, index) => index.toString()}
          ItemSeparatorComponent={Separator}
        />
        <Separator />
      </View>
    );
  }
}

const mapStateToProps = ({ lessons }) => ({ lessons });

const styles = {
  textStyle: {
    paddingVertical: 15,
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'open-sans-regular',
  },
  labelStyle: {
    paddingVertical: 10,
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: 'open-sans-regular',
  },
};

export default connect(
  mapStateToProps,
  { lessonsFetch, lessonTitlesFetch },
)(LessonList);
