"use client"
import React from 'react'

function ContenedorRenderProp({ contenido, render }) {
  return (
    <div className="p-4 border rounded-lg">
      {contenido}
      {render && render()}
    </div>
  )
}
export default ContenedorRenderProp


