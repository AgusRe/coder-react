import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {

  const [compra, setCompra] = useState(false)

  const {addItem} = useContext(CartContext) 

  const onAdd = (cantidad) => {
      setCompra(true)
      console.log('Compraste ${cantidad}  del item ${detalle.name}')
      addItem(detalle, cantidad)
  }

  return (
    <div>
        <h2>{detalle.name}</h2>
        <img src={detalle.img} alt={detalle.name}/>
        <p>{detalle.description}</p>
        <p>${detalle.price}</p>p
        <p>Stock:{detalle.stock} unidades</p>
        {compra ? 
        <div style={{width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Link to='/' className='btn btn-dark'>Seguí comprando</Link>
          <Link to='/carro' className='btn btn-dark'>Ir al carrito</Link>
        </div>
        : <ItemCount stock={detalle.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail