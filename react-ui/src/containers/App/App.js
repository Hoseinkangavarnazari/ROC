import React, { Component } from 'react';
import classes from './App.css';
import WithClass from '../../hoc/WithClass';
import Aux from '../../hoc/Aux_';
import Layout from '../../components/Layout/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {


  render() {
    return (
      <MuiThemeProvider>
      <Layout />
      </MuiThemeProvider>
    );
  }
}


export default App;
