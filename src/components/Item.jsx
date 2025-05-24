import React from 'react'

const Item = ({prod}) => {
  return (
    <div>
        <div className="card" style={{width: '18rem'}}>
            <img src={prod.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{prod.name}}</h5>
                <p className="card-text">${prod.price},00</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    </div>
  )
}

export default Item