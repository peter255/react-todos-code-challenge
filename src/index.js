import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import IndexPage from './pages/index';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <IndexPage />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
