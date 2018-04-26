import React, { Component } from 'react';
import classes from './SideBar.css';
import Contacts from '../../components/Contacts/Contacts';
import Profile from '../../components/Profile/Profile';




class App extends Component {
  state = {
    contacts: [
      {
        id: '121232',
        name: 'Max',
        image:'chexee-128.jpg'
      },
      {
        id: '12121',
        name: 'Minirol',
        image:'jsa-128.jpg'
      },
      {
        id: '1212321',
        name: 'javad',
         image:'kerem-128.jpg'
      },
      {
        id: '112121',
        name: 'saman',
         image:'ok-128.jpg'
      },
      {
        id: '166621',
        name: 'sasan',
         image:'uxceo-128.jpg'
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
        <Contacts
          contacts={this.state.contacts}
          showContactPage={this.showContactPage}
        />
      )
    }
    return (
        <div className={classes.sideBar}>
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
