import "../css/Navbar.css"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <nav className = "nav-container">
            <h2>Tienda</h2>
            <div className = "a-container">
                <a className = "" href="">Periféricos</a>
                <a href="">Sillas</a>
                <a href="">Iluminación</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar