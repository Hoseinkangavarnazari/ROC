import React from 'react';
import classes from './Contact.css';


const contacts = (props) => {

    // const rnd = Math.random();
    //// for checking error boundary
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className={classes.Contacts}>
            <p className={classes.title} onClick={props.pageSpec}>{props.name}</p>
            <div className={classes.gButton}>
                <button onClick={props.voiceCall}>voice</button>
                <button onClick={props.videoCall}>video</button>
            </div>
        </div>
    )
};

export default contacts;