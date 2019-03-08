import React, { Component } from 'react';
import {
  View, Image, ScrollView, Text,
} from 'react-native';

import styles from './styles';

class Swiper extends Component {
  state = {
    activeIndex: 0,
  };

  handleScroll = (e) => {
    const { layoutMeasurement, contentOffset } = e.nativeEvent;
    const activeIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    this.setState({ activeIndex });
  };

  renderIndicators = () => (
    <View style={styles.indicatorWrapper}>
      {this.props.children.map((value, index) => (
        <View
          key={index}
          style={[styles.indicator, this.state.activeIndex === index ? styles.indicatorActive : {}]}
        />
      ))}
    </View>
  );

  render() {
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.handleScroll}
          scrollEventThrottle={64}
        >
          {this.props.children}
        </ScrollView>
        {this.renderIndicators()}
      </View>
    );
  }
}

// class Exercise9 extends Component {
//   render() {
//     return (
//       <Swiper>
//         <View style={styles.screen1}>
//           <Text style={styles.text}>Screen 1</Text>
//         </View>
//         <View style={styles.screen2}>
//           <Text style={styles.text}>Screen 2</Text>
//         </View>
//         <View style={styles.screen3}>
//           <Text style={styles.text}>Screen 3</Text>
//         </View>
//       </Swiper>
//     );
//   }
// }

export default Swiper;
