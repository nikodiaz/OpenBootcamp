import React, { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/Contact";
import ContactForm from "../pure/ContactForm";

export default function ContactList() {

    const defaultContact1 = new Contact('Name1', 'email@example.com', 1234, true);
    const defaultContact2 = new Contact('Name2', 'email@example.com', 1234, true);
    const defaultContact3 = new Contact('Name3', 'email@example.com', 1234, false);

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3])

    function addContact(contact) {
		const tempContact = [...contacts];
		tempContact.push(contact);
		setContacts(tempContact);
	}

    function changeConection(contact) {
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact[index].conected = !tempContact[index].conected;
        setContacts(tempContact)
    }

    function deleteContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContact = [...contacts];
        tempContact.splice(index,1);

        setContacts(tempContact)
    }

    return (
            <div className="main-container">
                <ContactForm add={addContact}/>
                <div className="header">
                    <h3>Your Contacts</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => {
                            return (
                                <ContactComponent
                                    contact={contact}
                                    key={index}
                                    status={changeConection}
                                    remove={deleteContact}
                                />
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
    )
}