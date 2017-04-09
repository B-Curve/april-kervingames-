import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import NotFoundPage from './frames/NotFoundPage';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterApp from './reducers';
import SiteLayout from './frames/SiteLayout';
import DesktopLayout from './frames/DesktopLayout';
import TabletLayout from './frames/TabletLayout';
import { BrowserRouter, hashHistory, DefaultRoute, Route } from 'react-router-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import MobileDetect from 'mobile-detect';

let store = createStore(counterApp);
let layouts = [SiteLayout,DesktopLayout,TabletLayout];
let ActiveDevice;
let md = new MobileDetect(window.navigator.userAgent);
if(md.tablet() !== null){
  ActiveDevice = layouts[2];
}else if(md.phone() !== null){
  ActiveDevice = layouts[0];
}else{
  ActiveDevice = layouts[1];
}

render(
  <Provider store={store}>
    <BrowserRouter history={hashHistory}>
      <Route path="/" component={ActiveDevice}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
