import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text, View } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
  text,
  subText = '',
  onPress,
  selected = false,
  checkmark = true,
  visible = true,
  customIcon = null,
  iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      {customIcon}
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
        {text}
      </Text>
      {subText ? <Text style={styles.subText}>{subText}</Text> : null}
      {selected ? (
        <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
      ) : (
        <Icon />
      )}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  subText: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
