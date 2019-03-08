import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '$primaryPurple',
    marginTop: 20,
  },
  buttonTextStyle: {
    textAlign: 'center',
    flex: 1,
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'open-sans-regular',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  optionalText: {
    position: 'absolute',
    left: 15,
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'open-sans-regular',
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default styles;
