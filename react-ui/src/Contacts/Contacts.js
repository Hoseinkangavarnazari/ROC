import React from 'react';
import classes from './Contacts.css';


const contacts = (props) => {

    // const rnd = Math.random();
    //// for checking error boundary
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className={classes.Contacts}>
            <p onClick={props.pageSpec}>{props.name}</p>
            <div>
            <button className={classes.Contacts} onClick={props.voiceCall}>voice</button>
            <button className={classes.Contacts} onClick={props.videoCall}>video</button>
        </div>
        </div>
    )
};

export default contacts;