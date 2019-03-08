import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const swiperHeight = height / 3.5;

const styles = EStyleSheet.create({
  screen1: {
    flex: 1,
    backgroundColor: '#BAD9B5',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: swiperHeight,
  },
  screen2: {
    flex: 1,
    backgroundColor: '#ABA361',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: swiperHeight,
  },
  screen3: {
    flex: 1,
    backgroundColor: '#732C2C',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: swiperHeight,
  },
  text: {
    fontSize: 22,
    fontFamily: 'open-sans-semi-bold',
    color: '#404040',
    marginTop: 10,
    marginBottom: 3,
    marginHorizontal: 10,
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: swiperHeight,
  },
  indicatorWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  indicator: {
    width: 7,
    height: 7,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 3.5,
    marginHorizontal: 2,
  },
  indicatorActive: {
    backgroundColor: '#fff',
  },
});

export default styles;
