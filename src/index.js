import React from 'react';

import '~/config/ReactotronConfig';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#03a9f4" darkContent />
    <Routes />
  </Provider>
);

export default App;
