import React, { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const restar = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(prev => prev + 1);
    }
  };

  const comprar = () => {
    onAdd(count);
  };

  return (
    <div>
      <div className="d-flex align-items-center gap-2 mb-2">
        <button className="btn btn-danger" onClick={restar}>-</button>
        <span className="btn btn-light">{count}</span>
        <button className="btn btn-success" onClick={sumar}>+</button>
      </div>
      <button className="btn btn-primary" onClick={comprar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;