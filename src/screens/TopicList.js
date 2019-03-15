import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, Text, TouchableOpacity, View,
} from 'react-native';
import { connect } from 'react-redux';
import { Foundation } from '@expo/vector-icons';

import { getToken } from '../config/LoginUtils';
import { topicsFetchWithoutAuth, topicsFetch } from '../actions';
import { CardSection, Spinner } from '../components/common';
import { ListItem, Separator } from '../components/List';
import NavigationService from '../config/NavigationService';
import { decodeEntities } from '../helper';

const ICON_COLOR = '#868686';
const ICON_SIZE = 22;

class TopicList extends Component {
  static propTypes = {
    auth: PropTypes.object,
    steps: PropTypes.object,
    lessonId: PropTypes.number,
    topicsFetch: PropTypes.func,
    topics: PropTypes.object,
  };

  async componentDidMount() {
    const { steps, lessonId, topicsFetch } = this.props;
    const lessonData = steps.h['sfwd-lessons'];

    const token = await getToken();
    const authToken = JSON.parse(token);

    Object.entries(lessonData).forEach(([key, value]) => {
      if (key === lessonId.toString()) {
        const ids = Object.keys(value['sfwd-topic']);
        topicsFetch(authToken.token, ids);
      }
    });
  }

  onTopicPress = (topic) => {
    NavigationService.navigate('Topic', {
      topic,
    });
  };

  renderTopic = topic => (
    <TouchableOpacity onPress={() => this.onTopicPress(topic.item)}>
      <CardSection>
        <Text style={styles.textStyle}>{decodeEntities(topic.item.title.rendered)}</Text>
      </CardSection>
    </TouchableOpacity>
  );

  render() {
    const { topics, steps } = this.props;
    const lessonData = steps.h['sfwd-lessons'];
    const ids = [];

    Object.entries(lessonData).forEach(([key, value]) => {
      ids.push(Object.keys(value['sfwd-topic']));
    });

    const topicsData = ids[0]
      .map(id => topics.data.filter(t => t.id === parseInt(id))[0])
      .filter(t => t);

    if (topics.loading) {
      return <Spinner size="large" />;
    }

    return (
      <View>
        {topicsData.length > 0 && (
          <View>
            <CardSection>
              <Text style={styles.labelStyle}>Topics</Text>
            </CardSection>
            <FlatList
              data={topicsData}
              renderItem={({ item }) => (
                <ListItem
                  text={item.title.rendered}
                  onPress={() => this.onTopicPress(item)}
                  customIcon={<Foundation name="play-video" color={ICON_COLOR} size={ICON_SIZE} />}
                />
              )}
              ItemSeparatorComponent={Separator}
              keyExtractor={(topic, index) => index.toString()}
            />
            <Separator />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ topics }) => ({ topics });

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
  { topicsFetchWithoutAuth, topicsFetch },
)(TopicList);
