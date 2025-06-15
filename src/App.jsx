import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import NavbarReact from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Error from './components/Error';

import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarReact />
        <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Elige tu equipamiento profesional!" />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting="Estás dentro de la categoría: " />}
          />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carro" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
