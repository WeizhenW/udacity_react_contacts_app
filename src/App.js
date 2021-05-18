import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount(){
    ContactAPI.getAll().then(
      (contacts) => {
        this.setState({
          contacts: contacts
        })
      }
    )
  };



  onRemoveContact = (contact) => {

    const newContactsList = this.state.contacts.filter(c => c.id !== contact.id);
    this.setState({
      contacts: newContactsList
    });
  }
  render() {
    return (
      <div>
        <ListContacts 
          contacts = {this.state.contacts}
          onRemoveContact = {this.onRemoveContact} />
      </div>
    );
  }
}

export default App;
