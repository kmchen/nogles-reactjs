import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, hashHistory}  from 'react-router'
import {createStore, applyMiddleware}  from 'redux';

import getData  from './middleware/getData';
//import remoteActionMiddleware from './remote_action_middleware';
import App      from './components/App';
import Reducer  from './reducer/Reducer';
import apiUtil  from './util/APIUtils';
import {setState} from './action/Actions'

//import io from 'socket.io-client';
//const socket = io(`${location.protocol}//${location.hostname}:8090`);
//socket.on('state', state => store.dispatch(setState(state)));
//
const createStoreWithMiddleware = applyMiddleware(
    getData(apiUtil)
    )(createStore);
const store = createStoreWithMiddleware(Reducer);

store.dispatch(setState({}));

const routes = <Route >
  <Route path='/' component={App}></Route>
  </Route>;

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
