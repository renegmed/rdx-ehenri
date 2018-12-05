import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form'; 

// styles in-component - pay attention to the syntax
const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
};
  
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      name: 'Manny',
      currentTitle: '',
      currentDetails: '',
    }
  } 
  
  render() {
    return (
      <div style={styles}>
        <Header name={this.state.name}/>
        <Form />
        <Grid />
      </div>
    );
  }
}
