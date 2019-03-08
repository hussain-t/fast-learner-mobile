import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, TouchableOpacity, Platform, StatusBar,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import { CardSection } from '../components/common';
import { Separator } from '../components/List';
import VimeoVideoPlayer from '../components/VimeoVideoPlayer';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#FFFFFF';
const ICON_SIZE = 24;

const Topic = ({ navigation }) => {
  const { topic } = navigation.state.params;

  return (
    <ScrollView style={styles.containerStyle}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Text style={styles.titleText}>{topic.title.rendered}</Text>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <VimeoVideoPlayer url={topic.video_url} />
          <Separator />
          <View>
            <CardSection>
              {/* <Text style={styles.contentTextStyle}>{topic.content.rendered}</Text> */}
              <Text style={styles.contentTextStyle}>
                {topic.content.rendered.replace(/<[^>]*>/g, '')}
              </Text>
            </CardSection>
          </View>
        </ScrollView>
      </View>
      <View>
        <TouchableOpacity onPress={() => alert('Under technical construction.')}>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Complete</Text>
            <Ionicons name="ios-checkmark-circle-outline" size={ICON_SIZE} color={ICON_COLOR} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = EStyleSheet.create({
  containerStyle: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  contentTextStyle: {
    fontSize: Platform.OS === 'ios' ? 16 : 14,
    fontFamily: 'open-sans-regular',
    paddingLeft: Platform.OS === 'ios' ? 22 : 20,
    paddingRight: 10,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: Platform.OS === 'ios' ? 24 : 20,
    fontFamily: 'open-sans-semi-bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 40,
    backgroundColor: '$primaryPurple',
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

Topic.propTypes = {
  navigation: PropTypes.object,
};

export default Topic;
