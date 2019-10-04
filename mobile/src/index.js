import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import './config/ReactotronConfig';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import App from '~/App';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor="#7159c1" barStyle="light-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}
