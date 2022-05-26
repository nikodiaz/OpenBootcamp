import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ComponentB = ({ contact }) => {

  

  const [conection, setConection] = useState(contact.status)

  const changeConection = () => {
    setConection(conection ? false:true)
  }

  return (
    <div>
      <p>Nombre: { contact.name } </p>
      <p>Apellido: { contact.last_name } </p>
      <p>Email: { contact.email } </p>
      <p>Estado: { conection ? 'Contacto En Línea':'Contacto No Disponible' } </p>
      <button onClick={changeConection}>Cambiar Estado</button>
    </div>
  )
}

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
  name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.bool,
}

export default ComponentB