import React            from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import {deepOrange500}  from 'material-ui/styles/colors';
import GridList         from 'material-ui/GridList';

import Lists            from './Lists';
import apiUtil          from '../util/APIUtils';

const muiTheme = getMuiTheme({
    palette: { accent1Color: deepOrange500, },
});

class App extends React.Component {
  componentDidMount() {
    apiUtil.do('Get', 'http://localhost:7979/api/data')
      .then(function(result){
        console.log('--------------- result', result) 
      }, function(err){
        console.log('--------------- helloworld', err) 
      })
  }
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <GridList cols={2} cellHeight={200} margin={100}>
            <Lists />
            <Lists />
          </GridList>
        </MuiThemeProvider>
          );
  }
}

export default App;
