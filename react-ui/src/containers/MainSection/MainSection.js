import React,{Component} from 'react';
import classes from './MainSection.css';
const main = null; 

class MainSection extends Component { 

    state = { 
        this.props.user = "test";
    }
  
    render(){
    return(
        <div className={classes.MainSection}>
        {main}
        </div>
    );
}
}


export default MainSection ;