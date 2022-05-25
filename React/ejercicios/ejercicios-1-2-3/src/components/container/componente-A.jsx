import React from 'react'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/componente-B'

export const ContactList = () => {

  const exampleContact = new Contact('Nicolás', 'Díaz', 'email-example@email.com', true);

  return (
    <div>
      <div>
      Contacto:
      </div>
      <div>
        {/* Componente B */}
        <ContactComponent contact={exampleContact} />
      </div>
    </div>
  )
}
