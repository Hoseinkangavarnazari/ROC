import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Contacts from '../Contacts/Contacts';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';




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
     
      <div className={classes.App}>
      
        <div className={classes.ContactsContainer}>
          {contacts_}
        </div>
        <div className={classes.MainContainer}></div>
      </div>
     
    );
  }
}


export default App;
