import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Cart from './components/Cart';
// import Input from './components/Input';
import {CartProvider, CartContext} from './context/CartContext';
import Checkout from './components/Checkout';


function App() {
  return (
    <BrowserRouter>
      
      <CartProvider>
        <NavbarReact />
        <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Elige tu equipamiento profesional!" />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Estás dentro de la categoría: " />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/carro" element={<Cart />} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </CartProvider>
      
      
    </BrowserRouter>
  );
}

export default App;