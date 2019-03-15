import React, { Component } from 'react';
import {
  Text, FlatList, View, Platform,
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
  }

  onLessonPress = (lesson) => {
    NavigationService.navigate('Lesson', {
      lesson,
      steps: this.props.steps,
    });
  };

  renderItem = (item) => {
    const lesData = this.props.steps.h['sfwd-lessons'];
    const topicIds = [];

    Object.entries(lesData).forEach(([key, value]) => {
      if (key === item.id.toString()) {
        topicIds.push(Object.keys(value['sfwd-topic']));
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

  renderLessonTitles = item => (
    <ListItem
      text={decodeEntities(item)}
      customIcon={<MaterialIcons name="lock-outline" color={ICON_COLOR} size={ICON_SIZE} />}
    />
  )


  getCourse = (courseId) => {
    const courses = this.props.lessons.data.filter(l => l.courseId === courseId);
    if (courses.length === 0) return null;

    return courses[0];
  };

  render() {
    const { lessons, courseId } = this.props;
    const ids = this.props.steps.t['sfwd-lessons'];

    const course = this.getCourse(courseId);
    if (!course || course.isLoading) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner size="large" />
        </View>
      );
    }

    // order by lesson id
    const lessonsData = ids.map(id => course.lessons.filter(l => l.id === id)[0]).filter(l => l);

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
