import React, { Component } from 'react';
import classes from './App.css';
import Contacts from '../Contacts/Contacts';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Profile from '../components/Profile/Profile'

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

  showContactPage = (id) => {
    const contactIndex = this.state.contacts.findIndex(p => {
      return p.id === id;
    });

    const contact = { ...this.state.contacts[contactIndex] };
    console.log(contact.name);
  }

  render() {


    let contacts_ = null;
    if (true) {
      contacts_ = (
        <div>
          {
            this.state.contacts.map((contact, index) => {
              return <ErrorBoundary key={contact.id}>
                <Contacts click={() => this.showContactPage(contact.id)} name={contact.name} />
              </ErrorBoundary>
            })
          }
        </div>
      )
    }
    return (

      <div className={classes.App}>
        <Profile />
        <div className={classes.ContactsContainer}>
          {contacts_}
        </div>
        <div className={classes.MainContainer}></div>
      </div>

    );
  }
}


export default App;
