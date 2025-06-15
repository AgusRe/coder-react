import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../css/CartView.css'

const CartView = () => {
  const { cart, cartTotal, clear, removeItem } = useContext(CartContext)

  const onClear = () => {
    Swal.fire({
      title: '¿Estás seguro de que quieres borrar el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'No, mantenerlo',
    }).then((result) => {
      if (result.isConfirmed) {
        clear()
        Swal.fire('¡Carrito borrado!', '', 'success')
      }
    })
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-empty text-center py-5">
        <h3>No hay productos en el carrito</h3>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '2rem 0' }}>
      <div className="cart-container container py-5">
        <h2 className="text-center mb-4">Tu Carrito 🛒</h2>
        <div className="cart-items">
          {cart.map((item) => {
            const price = item.price ?? 0
            const formattedPrice = price.toLocaleString()
            const subtotal = price * (item.quantity ?? 1)

            return (
              <div
                key={item.id}
                className="cart-item shadow-sm rounded mb-3 p-3 d-flex align-items-center"
              >
                <img src={item.img} alt={item.name} className="cart-item-img me-3" />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1 text-muted">
                    ${formattedPrice} x {item.quantity ?? 1}
                  </p>
                  <p className="mb-0 fw-bold">Subtotal: ${subtotal.toLocaleString()}</p>
                </div>
                <button
                  className="btn btn-outline-danger btn-sm ms-3"
                  onClick={() => removeItem(item.id)}
                >
                  Quitar
                </button>
              </div>
            )
          })}
        </div>

        <div className="cart-summary text-end mt-4">
          <h4>
            Total a pagar:{' '}
            <span className="text-primary">
              ${ (cartTotal() ?? 0).toLocaleString() }
            </span>
          </h4>
          <div className="d-flex justify-content-end gap-2 mt-3">
            <button className="btn btn-danger" onClick={onClear}>
              Borrar carrito
            </button>
            <Link to="/checkout">
              <button className="btn btn-dark">Terminar compra</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartView
