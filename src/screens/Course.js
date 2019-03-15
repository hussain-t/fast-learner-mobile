import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  ScrollView,
  RefreshControl,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { connect } from 'react-redux';

import { CardSection } from '../components/common';
import LessonList from './LessonList';
import { decodeEntities } from '../helper';
import { SwipeUpCard } from '../components/SwipeUpCard';
import { BottomButton } from '../components/BottomButton';

const { height, width } = Dimensions.get('window');

class Course extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    // steps: PropTypes.object,
    // stepsFetch: PropTypes.func,
  };

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#a65aff',
    },
    headerTintColor: '#FFFFFF',
  };

  state = {
    refreshing: false,
  };

  onRefresh = () => {
    this.setState({ refreshing: true }, this.forceUpdate());
    this.setState({ refreshing: false });
  };

  renderLessons = (course) => {
    const { steps } = course;

    return <LessonList courseId={course.id} steps={steps} />;
  };

  getCourse = (id) => {
    const courses = this.props.lessons.data.filter(l => l.courseId === id);
    if (courses.length === 0) return null;

    return courses[0];
  };

  render() {
    const { course } = this.props.navigation.state.params;
    const lessonError = this.getCourse(course.id);
    const {
      id,
      title,
      course_price_type,
      image_url,
      course_price,
      short_description,
      link,
      date,
      author_name,
    } = course;
    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      textStyle,
      imageStyle,
      imageContainer,
    } = styles;

    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#FFFFFF' }}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }
      >
        <StatusBar translucent={false} barStyle="light-content" />
        <SwipeUpCard
          title={decodeEntities(title.rendered)}
          author={author_name}
          createdDate={new Intl.DateTimeFormat('en-US').format(new Date(date))}
          imageUrl={image_url.full_image}
        />
        <CardSection>
          <Text style={textStyle}>{short_description}</Text>
        </CardSection>
        {this.renderLessons(course)}
        {lessonError && lessonError.error ? (
          <BottomButton
            optionalText={course_price ? `\u20B9 ${course_price}` : course_price_type}
            buttonText="Enroll Now"
            link={link}
          />
        ) : null}
      </ScrollView>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  textStyle: {
    fontSize: Platform.OS === 'ios' ? 16 : 14,
    fontFamily: 'open-sans-regular',
    paddingLeft: Platform.OS === 'ios' ? 22 : 20,
    paddingRight: 10,
    paddingVertical: 15,
  },
  imageStyle: {
    height: 150,
    // flex: 1,
    width: 250,
    top: height / 3.5,
  },
};

const mapStateToProps = ({ auth, lessons }) => ({ auth, lessons });

export default connect(mapStateToProps)(Course);
