import React, { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncService';  // ← ya no importamos getOneProduct
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    setDetalle(null);
    getProducts()
      .then((response) => {
        const producto = response.find(
          item => String(item.id) === String(itemId)
        );
        setDetalle(producto || false);
      })
      .catch((error) => {
        console.error('Error al cargar detalle:', error);
        setDetalle(false);
      });
  }, [itemId]);

  if (detalle === null) return <p>Cargando detalle…</p>;
  if (!detalle) return <p>No se encontró el producto con id "{itemId}".</p>;

  return <ItemDetail detalle={detalle} />;
};

export default ItemDetailContainer;