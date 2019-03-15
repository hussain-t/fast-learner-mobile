import { AsyncStorage } from 'react-native';

const AUTH_TOKEN = 'AUTH_TOKEN';

let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }
  token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const signIn = newToken => AsyncStorage.setItem(AUTH_TOKEN, JSON.stringify(newToken));

export const signOut = () => {
  token = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};
