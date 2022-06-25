import React from "react";
import PropTypes from 'prop-types';
import { Contact } from "../../models/contact.class";

export default function ContactComponent({ contact, status, remove }) {

    function contactIconConected() {
        if(contact.conected){
            return(<i
                            className="bi bi-circle-fill"
                            style={{color:'green'}}
                            onClick={ ()=> status(contact) }
                        ></i>)
        } else {
            return(<i
                            className="bi bi-circle-fill"
                            style={{color:'red'}}
                            onClick={ ()=> status(contact) }
                        ></i>)
        }
    }
        return(
            <tr>
                <th>
                    <span>{contact.name}</span>
                </th>
                <th>
                    <span>{contact.email}</span>
                </th>
                <th>
                    <span>{contact.phone}</span>
                </th>
                <th>
                    <span>
                        {contactIconConected()}
                        <i onClick={ () => remove(contact) } className='bi-trash task-action' style={ {color:'tomato', margin:'0 0 0 16px'} }></i>
                    </span>
                </th>
            </tr>
        )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    status: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}