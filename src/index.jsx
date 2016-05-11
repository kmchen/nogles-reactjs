import React    from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, hashHistory}  from 'react-router'
import {createStore, applyMiddleware}  from 'redux';

import {AppContainer} from './components/App';
import getData      from './middleware/getData';
import Reducer      from './reducer/Reducer';
import apiUtil      from './util/APIUtils';
import {fetch}      from './action/Actions'

const createStoreWithMiddleware = applyMiddleware(
    getData(apiUtil)
    )(createStore);
const store = createStoreWithMiddleware(Reducer);

store.dispatch(fetch());

const routes = <Route >
  <Route path='/' component={AppContainer}></Route>
  </Route>;

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
