import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import "../css/Navbar.css";
import { NavLink } from 'react-router-dom';

function NavbarReact() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          <img src="/logo-wnf.png" alt="Logo" style={{ width: '5rem' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/category/mas vendidos'>Más vendidos</Nav.Link>
            <Nav.Link as={NavLink} to='/category/ofertas'>Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/sillas-gamer">Sillas Gamer</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/perifericos">Periféricos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/mousepads">Mousepads</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to='/carro'>
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;