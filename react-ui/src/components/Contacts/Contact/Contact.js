import React from 'react';
import classes from './Contact.css';
import Avatar from 'material-ui/Avatar';
import {  ListItem } from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';




const contacts = (props) => {

    // const rnd = Math.random();
    //// for checking error boundary
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }



    return (
            <ListItem
                onClick={props.pageSpec}
                leftAvatar={<Avatar src="" />}
                size={30}
                rightIcon={<CommunicationChatBubble />}
                className={classes.Text}
            >
            {props.name}
            </ListItem>
    )
};

export default contacts;