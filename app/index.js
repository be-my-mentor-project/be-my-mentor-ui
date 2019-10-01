import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from 'init/configureStore';
import history from 'init/history';

import reducerFactory from './reducers';

import App from './components/App';

const store = configureStore({
  history,
  reducerFactory,
  sagaOptions: {},
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
