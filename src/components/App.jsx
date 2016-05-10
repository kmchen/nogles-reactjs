import React  from 'react';
import {List, Map} from 'immutable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import GridList from 'material-ui/GridList';

//export default React.createClass({
  //render: function(){
    //return this.props.children;

  //}
//});

const muiTheme = getMuiTheme({
    palette: { accent1Color: deepOrange500, },
});

class App extends React.Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <GridList cols={2} cellHeight={200} margin={100}>
            <div >helloworld</div>
            <div >helloworld</div>
          </GridList>
        </MuiThemeProvider>
          );
  }
}

export default App;
