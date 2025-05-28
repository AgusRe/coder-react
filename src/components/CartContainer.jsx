import React, { useState } from 'react';
import Cart from '../components/Cart';

const CartContainer = () => {
  const [items, setItems] = useState([
    {
      id: '01',
      name: 'Mouse Pad Gaming L Antideslizante Meetion Mt-p110 Premium Color Negro',
      price: 12500,
      quantity: 1,
      img: 'https://i.postimg.cc/fTkZS4Tb/imagen-2025-05-19-162826881.png'
    },
    {
      id: '02',
      name: 'Monitor Gamer LG con pantalla de 27" 144Hz 220V y resolución 4K',
      price: 145000,
      quantity: 2,
      img: 'https://i.postimg.cc/6pwkVDBR/imagen-2025-05-19-163148769.png'
    }
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
