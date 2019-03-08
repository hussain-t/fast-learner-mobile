import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

export default function DismissableStackNavigator(routes, options) {
  const StackNav = createStackNavigator(routes, options);

  return class DismissableStackNav extends Component {
    static router = StackNav.router;

    render() {
      const { state, goBack } = this.props.navigation;
      const nav = {
        ...this.props.navigation,
        dismiss: () => goBack(state.key),
      };
      return <StackNav navigation={nav} />;
    }
  };
}
