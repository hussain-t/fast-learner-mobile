import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { getToken, signOut, signIn } from '../config/LoginUtils';
import { domain, API, endpoint } from '../config/app.json';

let isRefreshing = false;
const refreshSubscribers = [];

async function refreshToken(token) {
  const url = `${domain.env.stage + API.WP + API.JWT + endpoint.token}refresh`;

  try {
    const response = await axios.post(url, {
      token: token.token,
      email: token.user_email,
    });
    console.log('refreshToken.newtoken', response.data.token);
    return response.data;
  } catch (e) {
    console.log('error', e.response);
    return e;
  }
}

function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

function onRrefreshed(token) {
  refreshSubscribers.map(cb => cb(token));
}

// Add a response interceptor
export default () => axios.interceptors.response.use(
  response => response,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    const originalRequest = config;
    const statusCode = error.response.data.data.status;

    if (statusCode === 403) {
      const jsonToken = await getToken();
      const token = JSON.parse(jsonToken);

      const expDate = jwtDecode(token.token).exp;

      const currentTime = new Date().getTime() / 1000;

      if (currentTime > expDate) {
        console.log('Token expired............', token);

        if (!isRefreshing) {
          isRefreshing = true;
          refreshToken(token).then(async (newToken) => {
            signOut();

            await signIn(newToken);

            isRefreshing = false;
            onRrefreshed(newToken.token);
          });
        }

        const retryOrigReq = new Promise((resolve, reject) => {
          subscribeTokenRefresh((t) => {
            // replace the expired token and retry
            originalRequest.headers.Authorization = `Bearer ${t}`;
            resolve(axios(originalRequest));
          });
        });

        return retryOrigReq;
      }
    }

    // Do something with response error
    return Promise.reject(error);
  },
);
