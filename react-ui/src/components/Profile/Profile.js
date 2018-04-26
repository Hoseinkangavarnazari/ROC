import React from 'react';
import classes from './Profile.css';
import MenuButton from './MenuButton/MenuButton';




const Profile = (props) => {

    return (
        <div className={classes.Profile}>
        
            <div className={classes.Avatar}>
            </div>
            <div className={classes.Name}>
             Amir Nazari
            </div>
            < MenuButton/>

        </div>
    )
};

export default Profile;