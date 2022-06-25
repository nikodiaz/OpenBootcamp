import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

export default function ContactForm({add}) {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            emailRef.current.value,
            phoneRef.current.value,
            false
        );
        add(newContact);
    }

    return(
        <form onSubmit={addContact}>
            <h4>Create Contact</h4>
            <div className='form-outlined flex-fill input-container'>
                <input type='text' id='inputName' placeholder='Name' ref={nameRef} />
                <input type='email' id='inputEmail' placeholder='Email' ref={emailRef} />
                <input type='number' id='inputPhone' placeholder='Phone Number' ref={phoneRef} />
            </div>
            <button type='submit' className='btn btn-primary btn-lg'>Add</button>
        </form>
    )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
}