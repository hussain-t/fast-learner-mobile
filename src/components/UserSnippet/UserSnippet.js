import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { getUserSnippets } from '../../helper';

const UserSnippet = props => (
  <View style={styles.container}>
    <View style={styles.snippetContainer}>
      <Text style={styles.snippet}>{getUserSnippets(props.username)}</Text>
    </View>
    <Text style={styles.username}>{props.username}</Text>
  </View>
);

export default UserSnippet;
