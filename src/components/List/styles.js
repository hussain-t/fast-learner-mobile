import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $underlayColor: '$border',

  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    fontSize: 14,
    fontFamily: 'open-sans-regular',
    color: '$darkText',
    paddingHorizontal: 10,
    flex: 1,
  },
  subText: {
    justifyContent: 'flex-end',
    fontSize: 12,
    fontFamily: 'open-sans-regular',
    color: '$darkText',
    paddingHorizontal: 10,
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  icon: {
    backgroundColor: 'transparent',
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: '$border',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
    alignItems: 'center',
  },
  iconVisible: {
    backgroundColor: '$successGreen',
  },
  checkIcon: {
    width: 16,
  },
});

export default styles;
