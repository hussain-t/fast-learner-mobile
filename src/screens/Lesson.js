import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  Platform,
  StatusBar,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import { MaterialIcons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { CardSection } from '../components/common';
import TopicList from './TopicList';
import htmlStyles from '../constants/htmlStyles';

const ICON_COLOR = '#FFFFFF';
const ICON_SIZE = 22;

const Lesson = ({ navigation }) => {
  const { lesson, steps } = navigation.state.params;

  return (
    <View style={styles.containerStyle}>
      <StatusBar translucent={false} barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Text style={styles.titleText}>{lesson.title.rendered}</Text>
          <CardSection>
            <HTMLView
              paragraphBreak={null}
              stylesheet={htmlStyles}
              value={lesson.content.rendered}
            />
          </CardSection>
          <TopicList lessonId={lesson.id} steps={steps} />
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity onPress={() => alert('Under technical construction.')}>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Complete all</Text>
            <MaterialIcons name="done-all" size={ICON_SIZE} color={ICON_COLOR} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Lesson.propTypes = {
  navigation: PropTypes.object,
};

const styles = EStyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  titleText: {
    fontSize: Platform.OS === 'ios' ? 24 : 20,
    fontFamily: 'open-sans-semi-bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textStyle: {
    fontSize: 22,
    fontFamily: 'open-sans-regular',
    padding: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '$primaryPurple',
    marginTop: 20,
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'open-sans-regular',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 5,
  },
});

export default Lesson;
