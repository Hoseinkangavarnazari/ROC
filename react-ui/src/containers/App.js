import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Contacts from '../Contacts/Contacts';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Avatar from 'material-ui/Avatar';
import {indigo500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: indigo500,
    fontSize: 10,
  },
  appBar: {
    height: 40,
    color:indigo500,
    fontSize: 10,
  },
});


class App extends Component {

  state = {
    contacts: [
      {
        id: '121232',
        name: 'Max'
      },
      {
        id: '12121',
        name: 'Minirol'
      },
      {
        id: '1212321',
        name: 'javad'
      }
    ]
  };


  render() {


    let contacts_ = null;
    if (true) {
      contacts_ = (
        <div>
          {
            this.state.contacts.map((contact, index) => {
              return <ErrorBoundary key={contact.id}>
                <Contacts name={contact.name} />
              </ErrorBoundary>
            })
          }
        </div>
      )
    }
    return (
      // <div className={classes.App}>
      //   <h1>Online Chat</h1>
      //   <div className={classes.ContactsContainer}>
      //     {contacts_}
      //   </div>
      //   <div className={classes.MainContainer}></div>
      // </div>
      <MuiThemeProvider muiTheme={muiTheme} >
        <Avatar backgroundColor="#000"/> just test
      </MuiThemeProvider>
    );
  }
}


export default App;
