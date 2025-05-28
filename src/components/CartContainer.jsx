import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartContainer = () => {
  const [items, setItems] = useState([
    { id: '01', name: 'Mousepad', price: 12500, quantity: 1 },
    { id: '02', name: 'Monitor', price: 145000, quantity: 2 }
  ]);

  const handleRemove = (id) => {
    setItems((prev) => prev.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, qty) => {
    setItems((prev) =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  return (
    <Cart
      items={items}
      onRemove={handleRemove}
      onQuantityChange={handleQuantityChange}
    />
  );
};

export default CartContainer;
