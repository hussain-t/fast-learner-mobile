import { Dimensions, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { height, width } = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    height: height / 2,
  },
  panelContainer: {
    height: height / 2.5,
    backgroundColor: '$primaryPurple',
  },
  // textMeta: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  titleText: {
    fontSize: Platform.OS === 'ios' ? 24 : 20,
    fontFamily: 'open-sans-semi-bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '$white',
  },
  author: {
    alignSelf: 'flex-start',
    fontSize: 12,
    fontFamily: 'open-sans-regular',
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 7,
    color: '$white',
    borderColor: '$white',
    borderWidth: 1,
    borderRadius: 7,
  },
  createdDate: {
    alignSelf: 'flex-start',
    fontSize: 12,
    fontFamily: 'open-sans-regular',
    padding: 5,
    marginHorizontal: 20,
    marginVertical: 7,
    color: '$white',
    borderColor: '$white',
    borderWidth: 1,
    borderRadius: 7,
  },
  imageContainer: {
    position: 'absolute',
    width,
  },
  imageStyle: {
    height: 160,
    // flex: 1,
    width: 320,
    top: height / 3.5,
    marginHorizontal: 'auto',
    borderColor: '$white',
    borderWidth: 3,
    // borderRadius: 7,
  },
});

export default styles;
