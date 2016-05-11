import React            from 'react';
import {List, ListItem} from 'material-ui/List';
import ChevronRight     from 'material-ui/svg-icons/navigation/chevron-right';

class Lists extends React.Component {
   render() {
     console.log('--------- list data ------', this.props)
     return (
       <List style={styles}>
         <ListItem primaryText="Inbox" rightIcon={<ChevronRight />}/>
       </List>
     );
   }
};

let styles = {
  width: 200,
  height: 200,
  borderStyle: "dotted",
  margin: "0 auto",
  marginTop: 100
}

export default Lists
