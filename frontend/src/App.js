import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

import store from './store';

import Routes from './routes';
import history from './services/history';

export default function src() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}
