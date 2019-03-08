import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({
  onPress, children, buttonColor = '', boderColor = '', textColor = '',
}) => {
  const { buttonStyle, textStyle } = styles;
  const buttonStyles = [buttonStyle];
  const textStyles = [textStyle];

  if (buttonColor) {
    buttonStyles.push({ borderColor: boderColor });
  }

  if (boderColor) {
    buttonStyles.push({ backgroundColor: buttonColor });
  }

  if (textColor) {
    textStyles.push({ color: textColor });
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    // color: '#007aff',
    color: '#a65aff',
    fontSize: 16,
    fontFamily: 'open-sans-regular',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    // borderColor: '#007aff',
    borderColor: '#a65aff',
    marginLeft: 5,
    marginRight: 5,
  },
};

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  boderColor: PropTypes.string,
};

export { Button };
