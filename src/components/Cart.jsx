import React from 'react';
import '../css/Cart.css';

const Cart = ({ items, onRemove, onQuantityChange }) => {
  if (items.length === 0) {
    return (
      <div className="cart-empty text-center py-5">
        <h3>Tu carrito está vacío</h3>
        <p>Añade productos para comenzar tu compra.</p>
      </div>
    );
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-container container py-5">
      <h2 className="mb-4 text-center">Tu Carrito</h2>
      <div className="list-group">
        {items.map(({ id, name, price, quantity, img }) => (
          <div
            key={id}
            className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <div className="cart-item-info d-flex align-items-center">
              <img
                src={img}
                alt={name}
                className="cart-item-img me-3"
              />
              <div>
                <h5 className="mb-1">{name}</h5>
                <small className="text-muted">
                  ${price} x {quantity}
                </small>
              </div>
            </div>

            <div className="cart-item-actions d-flex align-items-center mt-3 mt-md-0">
              <div className="input-group input-group-sm me-3" style={{ maxWidth: '120px' }}>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => onQuantityChange(id, quantity - 1)}
                  disabled={quantity <= 1}>
                  –
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={quantity}
                  readOnly/>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => onQuantityChange(id, quantity + 1)}>
                  +
                </button>
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onRemove(id)}>
                Quitar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary mt-4 text-end">
        <h4>Total: <span className="text-primary">${total}</span></h4>
        <button className="btn btn-primary btn-lg mt-2">Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
