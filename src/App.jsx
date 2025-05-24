import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer';

function App() {
  return (
  <>
    <NavbarReact/>
    <ItemListContainer greeting = "¡Elige tú equipamiento profesional!"/>
    <Footer/>
  </>
  )
}

export default App