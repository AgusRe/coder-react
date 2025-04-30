import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarReact from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
  <>
    <NavbarReact/>
    <ItemListContainer greeting = "¡Elige tú equipamiento profesional!"/>
  </>
  )
}

export default App