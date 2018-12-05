import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form'; 
import { getInitialNotes, addNewNote, removeNote } from './store/actions';
 
class App extends Component {
  
  render() {
    return (
      <div style={styles}>
        <Header name={this.props.name}/>
        <Form addNewNote={this.props.addNewNote}/>
        <Grid notes={this.props.notes} removeNote={this.props.removeNote}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInitialNotes: () => {  // getInitialNotes (props.InitialNotes) maps to action's
      dispatch(getInitialNotes())
    },
    addNewNote: () => {
      dispatch(addNewNote(note))  // addNewNote (props.addNewNote) maps to action's
    },
    removeNote: () => {
      dispatch(removeNote(id))  // removeNote (props.removeNote) maps to action's
    },
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,       // notes (props.notes) refers to reducers state notes
    name: state.name,         // name  (props.name) refers to reducers state name
  }
}
export default connect(mapDispatchToProps, mapStateToProps)(App);
