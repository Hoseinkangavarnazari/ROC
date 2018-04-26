import React from 'react';
import MobileTearSheet from '../../assets/MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

const ListExampleChat = () => (
  <MobileTearSheet>
    <List>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar src="" />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar src="" />}
        rightIcon={<CommunicationChatBubble />}
      />
     
    </List>
    <Divider />
    <List>
      <Subheader>Previous chats</Subheader>
      <ListItem
        primaryText="Chelsea Otakan"
        leftAvatar={<Avatar src="" />}
      />
      <ListItem
        primaryText="James Anderson"
        leftAvatar={<Avatar src="" />}
      />
    </List>
  </MobileTearSheet>
);

export default ListExampleChat;