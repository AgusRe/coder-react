import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import '../css/ItemDetail.css';

const ItemDetail = ({ detalle }) => {
  const [compra, setCompra] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = async (cantidad) => {
    try {
      if (cantidad < 1 || cantidad > detalle.stock) {
        throw new Error('Cantidad inválida');
      }
      addItem(detalle, cantidad);
      setCompra(true);
      toast.success(
        `¡Agregaste ${cantidad} x "${detalle.name}" al carrito con éxito!`,
        { duration: 3000, position: 'top-right' }
      );
    } catch (error) {
      toast.error(
        error.message === 'Cantidad inválida'
          ? 'La cantidad seleccionada no es válida.'
          : 'No se pudo agregar al carrito. Intenta de nuevo.',
        { duration: 3000, position: 'top-right' }
      );
    }
  };

  return (
    <div className="item-detail-card container py-5">
      <div className="card shadow-sm rounded-3 p-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={detalle.img}
              alt={detalle.name}
              className="img-fluid product-image"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3 product-title">{detalle.name}</h2>
            <p className="product-description mb-4">{detalle.description}</p>
            <h4 className="text-primary mb-3 product-price">
              ${detalle.price}
            </h4>
            <p className="mb-4 product-stock">
              Stock: <span className="fw-bold">{detalle.stock}</span> unidades
            </p>
            {compra ? (
              <div className="d-flex gap-2">
                <Link to="/" className="btn btn-outline-secondary">
                  Seguí comprando
                </Link>
                <Link to="/carro" className="btn btn-primary">
                  Ir al carrito
                </Link>
              </div>
            ) : (
              <ItemCount stock={detalle.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
