import React, { Component } from 'react';
import classes from './MainSection.css';
import UserGenericMenu from '../../components/UserGenericMenu/UserGenericMenu';


let main = null;
let UserGenericMenuTitle = "test title username";
if (true) {
    main = <UserGenericMenu title={UserGenericMenuTitle} />;
}

class MainSection extends Component {

    state = {
        mode: "welcomePage",
    }

    changeTitleHandler =()=>{
        this.setState( { title:UserGenericMenuTitle } )
    }

    render() {
        return (
            <div className={classes.MainSection}>
                <div className={classes.Title}>
                    {main}
                </div>
            </div>
        );
    }
}

export default MainSection;