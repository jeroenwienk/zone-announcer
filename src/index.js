import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Route
} from 'react-router-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'typeface-roboto'
import './index.css';
import theme from './theme';

import App from './components/App';
import Home from './components/Home';
import Timer from './components/Timer';
import Settings from './components/Settings';

render(
  <MuiThemeProvider theme={theme}>
    <HashRouter basename="/" >
      <App>
        <Route exact path="/" component={Home}/>
        <Route path="/timer" component={Timer}/>
        <Route path="/settings" component={Settings}/>
      </App>
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById('root')
);


