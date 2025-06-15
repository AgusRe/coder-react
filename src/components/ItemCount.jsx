import React, { useState, useEffect } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    setCount(1);
  }, [stock]);

  const restar = () => {
    setCount(prev => Math.max(prev - 1, 1));
  };

  const sumar = () => {
    setCount(prev => Math.min(prev + 1, stock));
  };

  const comprar = () => {
    if (stock === 0) return;
    setIsAdding(true);
    onAdd(count);
    setTimeout(() => setIsAdding(false), 500);
  };

  return (
    <div>
      <div className="d-flex align-items-center gap-2 mb-2">
        <button
          className="btn btn-danger"
          onClick={restar}
          disabled={count <= 1 || isAdding}
        >
          -
        </button>

        <span className="btn btn-light">
          {count}
        </span>

        <button
          className="btn btn-success"
          onClick={sumar}
          disabled={count >= stock || isAdding}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-primary"
        onClick={comprar}
        disabled={stock === 0 || isAdding}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
