import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import reducers from '../reducers';
import axiosInterceptors from './axiosInterceptors';

const middleware = [ReduxThunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistReducer = persistCombineReducers(persistConfig, reducers);

const configureStore = () => {
  const store = createStore(persistReducer, {}, compose(applyMiddleware(...middleware)));
  const persistor = persistStore(store);

  return { store, persistor };
};

axiosInterceptors();

export default configureStore;
