import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import NotFoundPage from './frames/NotFoundPage';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterApp from './reducers';
import SiteLayout from './frames/SiteLayout';
import { BrowserRouter, hashHistory, DefaultRoute, Route } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

let store = createStore(counterApp);

render(
  <Provider store={store}>
    <BrowserRouter history={hashHistory}>
      <Route path="/" component={SiteLayout}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
