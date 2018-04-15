import React from 'react';
import Contact from './Contact/Contact';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

const contacts = (props) => props.contacts.map((contact, index) => {
        return <ErrorBoundary key={contact.id}>
          <Contact click={() => props.showContactPage(contact.id)} name={contact.name} />
        </ErrorBoundary>
      });


export default contacts;