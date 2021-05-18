import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import * as ContactAPI from './utils/ContactsAPI';

class ListContacts extends Component {
    state = {
        contacts: [],
        query: ''
    }

    componentDidMount(){
        ContactAPI.getAll().then(
          (contacts) => {
            this.setState({
              contacts: contacts
            })
          }
        )
      };

    changeQueryString = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    showAll = () => {
        this.setState({
            query: ''
        })
    }

    onRemoveContact = (contact) => {
        const newContactsList = this.state.contacts.filter(c => c.id !== contact.id);
        this.setState({
          contacts: newContactsList
        });
      }

    render() {
        //destructure the props and state
        // const { contacts, onRemoveContact } = this.props;
        const { query, contacts } = this.state;

        const showingContacts = query === ''
            ? contacts
            : contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()));

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='search text'
                        value={query}
                        onChange={this.changeQueryString} />
                    <Router>
                            <Link
                            to='/create'
                            className='add-contact'>
                            Add Contact
                            </Link>
                    </Router>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.showAll}>Show All</button>
                    </div>
                )}
                <ol className='contact-list'>
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className="contact-list-item">
                            <div
                                className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            >
                            </div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button
                                onClick={() => this.onRemoveContact(contact)}
                                className='contact-remove'></button>
                        </li>
                    )
                    )}
                </ol>
            </div>

        )
    }

}

export default ListContacts;