import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import '../css/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <h4>Suscríbete y recibe ofertas</h4>
        <form className="newsletter__form">
          <input
            type="email"
            placeholder="Tu email"
            className="newsletter__input"
          />
          <button type="submit" className="newsletter__button">
            Enviar
          </button>
        </form>
      </div>

      {/* Links */}
      <div className="footer__links">
        <div className="footer__col">
          <h5>Categorías</h5>
          <ul>
            <li><a href="#perifericos">Periféricos</a></li>
            <li><a href="#sillas">Sillas Gamer</a></li>
            <li><a href="#mousepads">Mousepads</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>Atención al cliente</h5>
          <ul>
            <li><a href="#ayuda">Ayuda / FAQs</a></li>
            <li><a href="#envios">Envíos y devoluciones</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>Síguenos</h5>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} RB Gaming • Todos los derechos reservados</p>
        <div className="footer__payments">
          <img src="/visa.png" alt="Visa"/>
          <img src="/mastercard.png" alt="Mastercard"/>
          <img src="/modo.png" alt="MODO"/>
          <img src="/mercadopago.png" alt="MercadoPago"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer
