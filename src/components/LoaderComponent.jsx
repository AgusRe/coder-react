import React from 'react'
import { CircleLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div style={{ width: '100%', height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircleLoader color="black" size={65} />
      <p>Cargando...</p>
    </div>
  )
}

export default LoaderComponent