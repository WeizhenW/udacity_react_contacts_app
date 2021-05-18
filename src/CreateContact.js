import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';
import * as ContactAPI from './utils/ContactsAPI';

class CreateContact extends Component {

    state = {
        newContact: {
            name: '',
            handler: '', 
            avatarUrl: ''
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const formValues = serializeForm(e.target, { hash: true });
        console.log(formValues);

        ContactAPI.create(formValues).then(
            () => {
                this.props.history.push('/');
            }
        )
    }

    render() {
        return (
            <div>
                <Link to='/'
                    className='close-create-contact'>
                    </Link>
                <form onSubmit={this.handleSubmit} className='create-contact-form'>
                    <ImageInput
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxHeight={64} />
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='name'></input>
                        <input type='text' name='handle' placeholder='handle'></input>
                        <button>Add Contact</button>
                    </div>

                </form>
            </div>
        )

    }
}

export default CreateContact;