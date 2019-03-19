import React, { Component } from 'react';
import {
  ScrollView, View, Text, Image, StatusBar,
} from 'react-native';

import { Swiper, styles } from '../components/Swiper';
import CourseList from './CourseList';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Swiper>
          <View style={styles.screen1}>
            <Image style={styles.imageStyle} source={require('../../assets/course3.jpg')} />
          </View>
          <View style={styles.screen2}>
            <Image style={styles.imageStyle} source={require('../../assets/course5.jpg')} />
          </View>
          <View style={styles.screen3}>
            <Image style={styles.imageStyle} source={require('../../assets/course6.jpg')} />
          </View>
        </Swiper>
        <Text style={styles.text}>Top Courses</Text>
        <ScrollView style={{ flex: 1 }}>
          <CourseList horizontal cardWidth />
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
