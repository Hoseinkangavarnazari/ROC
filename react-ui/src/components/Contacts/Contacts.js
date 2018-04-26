import React from 'react';
import Contact from './Contact/Contact';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Download from 'material-ui/svg-icons/file/file-download';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const contacts = (props) => props.contacts.map((contact, index) => {
        return <ErrorBoundary key={contact.id}>
          <Contact click={() => props.showContactPage(contact.id)} name={contact.name} />
        </ErrorBoundary>
      });
 

export default contacts;