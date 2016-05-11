import React            from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import {deepOrange500}  from 'material-ui/styles/colors';
import GridList         from 'material-ui/GridList';

import Lists            from './Lists';

const muiTheme = getMuiTheme({
    palette: { accent1Color: deepOrange500, },
});

class App extends React.Component {
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
