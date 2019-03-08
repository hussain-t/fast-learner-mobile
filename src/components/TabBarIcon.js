import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export const TabBarIonicons = ({ name, focused }) => (
  <Icon.Feather
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

export const TabBarFeatherIcons = ({ name, focused }) => (
  <Icon.Feather
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);
