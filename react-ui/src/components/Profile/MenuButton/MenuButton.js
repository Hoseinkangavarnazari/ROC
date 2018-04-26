import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {blue500, red500, greenA200} from 'material-ui/styles/colors'



const divStyle = {
    textAlign: 'right',
    marginTop: 30,
    color: 'white'
};


const MenuButton = () => (

    <div style={divStyle}>
        <IconMenu

            iconButtonElement={<IconButton ><MoreVertIcon /></IconButton>}
        >
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Sign out" />
            <MenuItem primaryText="Close" />
        </IconMenu>
    </div>

);




export default MenuButton; 