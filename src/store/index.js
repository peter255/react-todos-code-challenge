import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const middleware = [
  thunk,
];

// In development, use the browser's Redux dev tools extension if installed
const enhancers = [];
const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && typeof window !== 'undefined' &&
  window.devToolsExtension) {
  enhancers.push(window.devToolsExtension());
}

export default createStore(
    reducers,
    {},
    applyMiddleware(...middleware),
    ...enhancers);
