// Encargado de hacer el map
import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1rem', padding: '1.5rem', alignItems: 'center'}}>
        {data.map((producto) => <Item key={producto.id} prod={producto}/>)}
    </div>
  )
}

export default ItemList