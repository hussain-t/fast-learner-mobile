import React from 'react';
import { Platform } from 'react-native';

const htmlStyles = {
  p: {
    fontSize: Platform.OS === 'ios' ? 16 : 14,
    fontFamily: 'open-sans-regular',
    paddingLeft: Platform.OS === 'ios' ? 22 : 20,
    paddingRight: 10,
    paddingVertical: 10,
  },
  ol: {
    paddingLeft: Platform.OS === 'ios' ? 22 : 20,
    paddingRight: 5,
    paddingVertical: 5,
    top: 0,
  },
  li: {
    fontSize: Platform.OS === 'ios' ? 16 : 14,
    fontFamily: 'open-sans-regular',
  },
};

export default htmlStyles;
