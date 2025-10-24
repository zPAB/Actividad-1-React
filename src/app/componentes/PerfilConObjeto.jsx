import React from 'react'

export default function PerfilConObjeto(props) {
  return (
    <div>
        <h1>Nombre : {props.nombre},</h1>
        <p>Hobbies: {''}
            {props.hobbies.length > 0 ? props.hobbies.join(', '): 'No tiene hobbies'}
        </p>
    </div>
  )
}
