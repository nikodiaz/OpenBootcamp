import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({ contact }) => {

  const [conection, setConection] = useState(contact.conected)

  const changeConection = () => {
    setConection(conection ? false:true)
  }

  return (
    <div>
      <h2>Nombre: { contact.name } </h2>
      <h2>Apellido: { contact.last_name } </h2>
      <h3>Email: { contact.email } </h3>
      <h4>Estado: { conection ? 'Contacto En Línea':'Contacto No Disponible' } </h4>
      <button onClick={changeConection}>Cambiar Estado</button>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent