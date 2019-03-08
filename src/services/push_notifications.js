import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
  // AsyncStorage.removeItem('pushToken');
  // const token = await AsyncStorage.getItem('pushToken');
  // console.log('push', token);


  const previousToken = await AsyncStorage.getItem('pushToken');
  console.log('previousToken', previousToken);

  if (previousToken) {
    console.log('token available');
    return;
  } else {
    console.log('no token');
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);

    if (status !== 'granted') {
      console.log('status', status);
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();

    await axios.post(PUSH_ENDPOINT, { token: { token } });

    AsyncStorage.setItem('pushToken', token);
  }
};
