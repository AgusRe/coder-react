import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css';

function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    toast.success(`¡Gracias por suscribirte con ${data.email}!`, {
      duration: 3000,
      position: 'bottom-left',
    });
    reset();
  };

  return (
    <footer className="footer">
      {/* Newsletter */}
      <div className="footer__newsletter">
        <h4>Suscríbete y recibe ofertas</h4>
        <form className="newsletter__form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <input
            type="email"
            placeholder="Tu email"
            className="newsletter__input"
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Formato de email inválido',
              },
              maxLength: {
                value: 50,
                message: 'Máximo de 50 caracteres',
              },
              validate: (value) =>
                value.trim() === value || 'No puede tener espacios al inicio o fin',
            })}
            disabled={isSubmitting}
          />
          <button type="submit" className="newsletter__button" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
          {errors.email && <p className="text-danger mt-1">{errors.email.message}</p>}
        </form>
      </div>

      {/* Links */}
      <div className="footer__links">
        <div className="footer__col">
          <h5>Categorías</h5>
          <ul>
            <li>
              <Link to="/category/perifericos">Periféricos</Link>
            </li>
            <li>
              <Link to="/category/sillas gamer">Sillas Gamer</Link>
            </li>
            <li>
              <Link to="/category/mousepads">Mousepads</Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>Atención al cliente</h5>
          <ul>
            <li>
              <Link to="/ayuda">Ayuda / FAQs</Link>
            </li>
            <li>
              <Link to="/envios">Envíos y devoluciones</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h5>Síguenos</h5>
          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} RB Gaming • Todos los derechos reservados</p>
        <div className="footer__payments">
          <img src="/visa.png" alt="Visa" />
          <img src="/mastercard.png" alt="Mastercard" />
          <img src="/modo.png" alt="MODO" />
          <img src="/mercadopago.png" alt="MercadoPago" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;