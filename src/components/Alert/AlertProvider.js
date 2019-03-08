import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

class AlertProvider extends Component {
  static get childContextTypes() {
    return {
      alertWithType: PropTypes.func,
      alert: PropTypes.func,
    };
  }

  static get propTypes() {
    return {
      children: PropTypes.any,
    };
  }

  getChildContext() {
    return {
      alert: (...args) => this.dropdown.alert(...args),
      alertWithType: (...args) => this.dropdown.alertWithType(...args),
    };
  }

  render() {
    const { children } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(children)}
        <DropdownAlert
          defaultContainer={{
            padding: 8,
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
          }}
          ref={(ref) => {
            this.dropdown = ref;
          }}
          closeInterval={2000}
          // updateStatusBar={false}
        />
      </View>
    );
  }
}

export default AlertProvider;
