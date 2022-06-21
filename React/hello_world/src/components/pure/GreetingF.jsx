import React, { useState } from 'react'
import PropTypes from 'prop-types'

function GreetingF({ name }) {

  	//Breve introducción a useState
  	//const [variable, método para actualizarlo] = useState(estado inicial)
  	const [age, setAge] = useState(26);

  	const birthday = () => {
    //actualizar el estado
    	setAge(age + 1);
  	}

  	return (
    	<div>
      		<h1>¡Hello {name}!</h1>
      		<h2>Your age is {age} </h2>
      		<div>
        		<button onClick={birthday}>Cumplir años</button>
      		</div>
    	</div>
  	)
}

GreetingF.propTypes = {
  	name: PropTypes.string,
}

export default GreetingF
