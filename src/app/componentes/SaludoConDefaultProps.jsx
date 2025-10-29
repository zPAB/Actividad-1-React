import React from 'react'

function SaludoConDefaultProps({ nombre = 'Invitado' }) {
  return <h2>Hola, {nombre} </h2>
}

export default SaludoConDefaultProps
