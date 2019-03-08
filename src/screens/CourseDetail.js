import React, { Component } from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
// import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';

import NavigationService from '../config/NavigationService';
import { Card, CardSection } from '../components/common';
import { capitalize, decodeEntities } from '../helper';

class CourseDetail extends Component {
  onCoursePress = () => {
    console.log('this.props', this.props);
    const { item } = this.props.course;
    NavigationService.navigate('Course', {
      course: item,
      // title: item.title.rendered,
    });
  };

  render() {
    const {
      id, title, course_price_type, image_url, course_price,
    } = this.props.course.item;
    const {
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle,
    } = styles;

    const { cardWidth } = this.props;
    let width = '50%';
    if (cardWidth) {
      width = 250;
    }

    return (
      <TouchableOpacity style={{ width }} onPress={this.onCoursePress}>
        <View>
          <Card>
            <CardSection>
              <Image style={imageStyle} source={{ uri: image_url.full_image }} />
            </CardSection>

            <CardSection>
              {/* <View style={thumbnailContainerStyle}>
                                <Image
                                    source={{ uri: thumbnail_image }}
                                    style={thumbnailStyle}
                                />
                            </View> */}
              <View style={headerContentStyle}>
                {/* <HTMLView style={headerTextStyle} value={title.rendered} /> */}
                <Text style={headerTextStyle} numberOfLines={1} ellipsizeMode="tail">
                  {decodeEntities(title.rendered)}
                </Text>
              </View>
            </CardSection>

            <CardSection>
              {course_price ? (
                <Text>
                  Price:
                  {` \u20B9 ${course_price}`}
                </Text>
              ) : (
                <Text>{capitalize(course_price_type)}</Text>
              )}
            </CardSection>
          </Card>
        </View>
      </TouchableOpacity>
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
  headerTextStyle: {
    fontSize: 14,
    fontFamily: 'open-sans-regular',
  },
  imageStyle: {
    height: 100,
    flex: 1,
    width: null,
  },
};

export default CourseDetail;
