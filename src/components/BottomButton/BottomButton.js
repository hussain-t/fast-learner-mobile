import React from 'react';
import {
  View, Text, TouchableOpacity, Linking,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { capitalize } from '../../helper';

const BottomButton = ({ optionalText = '', link = '', buttonText }) => (
  <View>
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View style={styles.buttonStyle}>
        <Text style={styles.optionalText}>{capitalize(optionalText)}</Text>
        <Text style={styles.buttonTextStyle}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

BottomButton.propTypes = {
  optionalText: PropTypes.string,
  buttonText: PropTypes.string,
  link: PropTypes.string,
};
export default BottomButton;
