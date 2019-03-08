import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import { Constants } from 'expo';
import { getNumFromString } from '../helper';

import { Spinner } from './common';

class VimeoVideoPlayer extends Component {
  state = {
    isLoading: true,
  };

  render() {
    const vimeoId = getNumFromString(this.props.url);

    return (
      <View style={styles.container}>
        <WebView
          // onLoadStart={() => this.setState({ isLoading: true })}
          // onLoad={() => this.setState({ isLoading: false })}
          javaScriptEnabled
          scrollEnabled={false}
          renderLoading={() => <Spinner size="large" />}
          startInLoadingState
          source={{
            uri: `https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`,
          }}
        />
        {/* {this.state.isLoading && <Spinner size="large" />} */}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: 300,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
  },
  //   paragraph: {
  //     margin: 24,
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //     color: '#34495e',
  //   },
};

export default VimeoVideoPlayer;
