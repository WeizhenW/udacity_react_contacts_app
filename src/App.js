import React, { Component } from 'react';
import ListContacts from './ListContacts';

class App extends Component {
  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
     ]
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
