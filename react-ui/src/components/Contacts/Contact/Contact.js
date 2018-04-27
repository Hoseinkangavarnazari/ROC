import React from 'react';
import classes from './Contact.css';
import Avatar from 'material-ui/Avatar';
import {  ListItem } from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { stringify } from 'querystring';

import image from '../../../assets/images/ok-128.jpg'; 


const contacts = (props) => {

    // const rnd = Math.random();
    //// for checking error boundary
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

   let avatarURL = "https://server6.asanwebhost.com:2083/cpsess2882448630/viewer/home%2fsarvesab%2fpublic_ftp%2fimage/";
  avatarURL += props.image;

    console.log(avatarURL);

    return (
            <ListItem
                onClick={props.pageSpec}
                leftAvatar={<Avatar src={avatarURL} />}
                size={30}
                rightIcon={<CommunicationChatBubble />}
                className={classes.Text}
            >
            {props.name}
            </ListItem>
    )
};

export default contacts;