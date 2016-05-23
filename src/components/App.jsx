import React                from 'react';
import {connect}            from 'react-redux';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import {deepOrange500}      from 'material-ui/styles/colors';
import {GridList, GridTile} from 'material-ui/GridList';

import LoginButton    from './LoginButton';
import APIUtils       from '../util/APIUtils';
import Constant       from '../util/Constants'
import {Authenticate} from '../action/Actions'

const muiTheme = getMuiTheme({
    palette: { accent1Color: deepOrange500, },
});

const cst = Constant;
const api = APIUtils;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
   _login() {
     let resolve = (result) => {
        if (!result || !result.body) {
          console.error('Missing redirect url');
          return;
        }
        this.props.authenticate({loginPage: false, authURL: result.body});
      };

    api.do(cst.http.GET, cst.urlLogin).then(resolve);
    return;
  }
  userAuth(url) {
    window.location = url;
  }
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <GridList cols={3} >
            <GridTile />
            <GridTile >
              { this.props.loginPage ? 
                <LoginButton click={this._login.bind(this)} /> : 
                  this.userAuth(this.props.authURL)}
            </GridTile>
            <GridTile />
          </GridList>
        </MuiThemeProvider>
          );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (update) => {
      dispatch(Authenticate(update));
    },
    validateUser: (update) => {
      dispatch()
    }
  }
}
const mapStateToProps = (state) => {
  return {
    authURL: state.get('authURL'),
    loginPage: state.get('loginPage')
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
