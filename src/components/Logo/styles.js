import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  $largerContainerSize: imageWidth,
  $largeImageSize: imageWidth,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 1.3,

  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largerContainerSize',
    height: '$smallContainerSize',
  },
  logo: {
    width: '$largeImageSize',
  },
});

export default styles;
