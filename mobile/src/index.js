// import React from 'react';
// import {Text} from 'react-native';

// // import { Container } from './styles';

// export default function src() {
//   return <Text>Opa</Text>;
// }

import React from 'react';
import {StatusBar, YellowBox} from 'react-native';
import './config/ReactotronConfig';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './store';
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
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <App />
      </PersistGate>
    </Provider>
  );
}
