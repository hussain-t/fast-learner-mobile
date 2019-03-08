import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { width, height } = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    // flex: 1,
    width,
    height: height / 3.5,
    backgroundColor: '$white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  snippetContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '$primaryPurple',
  },
  snippet: {
    color: '$white',
    fontSize: 52,
    fontFamily: 'open-sans-regular',
    // fontWeight: '600',
  },
  username: {
    paddingTop: 20,
    color: '#000000',
    fontSize: 32,
    fontFamily: 'open-sans-regular',
  },
});

export default styles;
