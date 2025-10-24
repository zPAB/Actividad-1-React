import React from 'react'

function CajaChildren({ children }) {
  return (
    <div className="p-4 border-2 border-blue-400 rounded-lg">
      {children}
    </div>
  )
}

export default CajaChildren
