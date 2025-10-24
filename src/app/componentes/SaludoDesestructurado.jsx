import React from 'react'

export default function SaludoDesestructurado(props) {
  return (
    <div>
      <h1>Hola {props.nombre}, tu edad es {props.edad}</h1>
    </div>
  )
}
