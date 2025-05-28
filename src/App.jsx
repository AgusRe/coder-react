import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Input from './components/Input';

function App() {
  return (
    <BrowserRouter>
    <NavbarReact/>
    <Routes>
      <Route path='/' element={<ItemListContainer greeting = "¡Elige tú equipamiento profesional!"/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer greeting = "Estás dentro de la categoría: "/>}/>
      <Route path='/item/:itemId' element={<ItemListContainer/>}/>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    <Footer/>

    </BrowserRouter>
  )
}

export default App