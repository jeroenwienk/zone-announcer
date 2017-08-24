import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'typeface-roboto'
import './index.css';
import { requestStoreInitialization, registerIpcRendererEvents } from './registerEvents';
import theme from './theme';
import { ROUTES } from './constants'
import rootReducer from './reducers/index';

import RouterHook from './components/RouterHook';
import App from './components/App';
import Home from './components/Home';
import Timer from './components/Timer';
import Settings from './containers/Settings';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true
  });
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

registerIpcRendererEvents(store);
requestStoreInitialization();

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <App>
          <RouterHook />
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.TIMER} component={Timer}/>
          <Route path={ROUTES.SETTINGS} component={Settings}/>
        </App>
      </HashRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);


