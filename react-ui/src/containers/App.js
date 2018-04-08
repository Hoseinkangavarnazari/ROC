import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Contacts from './Contacts/Contacts';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
      }
    ]
  };




  render() {

    return (
      <div className={classes.App}>
        <h1>Online Chat</h1>
        <div className={classes.ContactsContainer}>
          {contacts}
        </div>
        <div className={classes.MainContainer}></div>
      </div>
    );
  }
}


export default App;
