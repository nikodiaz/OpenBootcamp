import React from 'react'
import ComponentB from '../pure/componente-B'
import { Contact } from '../../models/contact.class'

export const ComponentA = () => {

  const exampleContact = new Contact('Nicolás', 'Díaz', 'email-example@email.com', true);

  return (
    <div>
      <div>
      Contacto:
      </div>
      <div>
        {/* Componente B */}
        <ComponentB contact={exampleContact}/>
      </div>
    </div>
  )
}
