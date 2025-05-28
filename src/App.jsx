import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import CartContainer from './components/CartContainer';
// import Input from './components/Input';

function App() {
  return (
    <BrowserRouter>
      <NavbarReact/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="¡Elige tú equipamiento profesional!"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estás dentro de la categoría: "/>}/>
        <Route path='/item/:itemId' element={<ItemListContainer/>}/>
        <Route path='/carro' element={<CartContainer />} />
        {/* Ruta para agarrar error 404 (pagina que no existe dentro del dom) */}
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App