import React, { Component } from 'react';

class CreateContact extends Component {

    state = {
        newContact: {
            name: '',
            handler: '', 
            avatarUrl: ''
        }
    };

    render() {
        return (
            <div>This is create contact</div>
        )

    }
}

export default CreateContact;