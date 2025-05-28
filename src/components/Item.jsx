import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <div>
        <div className="card" style={{width: '18rem'}}>
            <img src={prod.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">${prod.price},00</p>
                <Link to={'/item/'+prod.id} className="btn btn-primary">Ver más</Link>
            </div>
        </div>
    </div>
  )
}

export default Item