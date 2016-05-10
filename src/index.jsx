import React    from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory}  from 'react-router'
import {createStore, applyMiddleware}  from 'redux';
import {Provider} from 'react-redux';

//import remoteActionMiddleware from './remote_action_middleware';
import App      from './components/App';
//import Layout from './components/Layout';
import Reducer  from './reducer/Reducer';

//const socket = io(`${location.protocol}//${location.hostname}:8090`);
//socket.on('state', state => store.dispatch(setState(state)));

//const createStoreWithMiddleware = applyMiddleware(
    //remoteActionMiddleware(ApiUtil)
    //)(createStore);
//const store = createStoreWithMiddleware(reducer);
const store = createStore(Reducer);

const routes = <Route >
  <Route path='/' component={App}></Route>
  </Route>;

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);
//ReactDom.render(<App />, document.getElementById('app'));
