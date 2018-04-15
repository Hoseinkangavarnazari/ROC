import React from 'react';
import classes from './Profile.css';


const Profile = (props) => {

    return (
        <div className={classes.Profile}>
        
            <div className={classes.Avatar}>
            </div>
            <div className={classes.Name}>
             Amir Nazari
            </div>
        </div>
    )
};

export default Profile;