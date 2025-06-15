import React from 'react'
import Item from './Item'

const ItemList = ({ data }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        padding: '1.5rem',
        justifyItems: 'center',
        alignItems: 'start'
      }}
    >
      {data.map((producto) => (
        <Item key={producto.id} prod={producto} />
      ))}
    </div>
  )
}

export default ItemList
