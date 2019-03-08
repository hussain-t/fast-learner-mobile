import React, { Component } from 'react';
import {
  View, Text, Image, Keyboard, Animated, Platform,
} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  state = {
    containerImageWidth: new Animated.Value(styles.$largeContainerSize),
    containerImageHeight: new Animated.Value(styles.$smallContainerSize),
    imageWidth: new Animated.Value(styles.$largeImageSize),
  };

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }

    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    const { containerImageWidth, imageWidth } = this.state;

    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    const { containerImageWidth, imageWidth } = this.state;

    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const { containerImageWidth, containerImageHeight, imageWidth } = this.state;

    const containerImageStyle = [
      styles.containerImage,
      { width: containerImageWidth, height: containerImageHeight },
    ];

    const imageStyle = [styles.logo, { width: imageWidth }];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </Animated.View>
      </View>
    );
  }
}

export default Logo;
