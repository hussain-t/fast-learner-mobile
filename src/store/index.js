import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';
import axiosInterceptors from './axiosInterceptors';

const middleware = [ReduxThunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducers, {}, compose(applyMiddleware(...middleware)));

axiosInterceptors();

export default store;
