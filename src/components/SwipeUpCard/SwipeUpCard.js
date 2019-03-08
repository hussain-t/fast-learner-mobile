import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const SwipeUpCard = ({
  title, author, createdDate, imageUrl,
}) => (
  <View style={styles.container}>
    <View style={styles.panelContainer}>
      <Text style={styles.titleText}>{title}</Text>
      {/* <View style={styles.textMeta}> */}
      <Text style={styles.author}>{`Created by ${author}`}</Text>
      <Text style={styles.createdDate}>{`Created ${createdDate}`}</Text>
      {/* </View> */}
    </View>
    <View style={styles.imageContainer}>
      <View
        style={{
          display: 'flex',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center',
        }}
      >
        <Image style={styles.imageStyle} source={{ uri: imageUrl }} />
      </View>
    </View>
  </View>
);

export default SwipeUpCard;
