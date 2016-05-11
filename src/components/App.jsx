import React            from 'react';
import {connect}        from 'react-redux';
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
            <Lists data={this.props.data}/>
            <Lists data={this.props.data}/>
          </GridList>
        </MuiThemeProvider>
          );
  }
}

function mapStateToProps(state){
  return {
    data: state.get('data'),
  };
}

//export default App;
export const AppContainer = connect(mapStateToProps)(App);
