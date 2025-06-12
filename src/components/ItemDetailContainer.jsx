import React, { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncService';  // ← ya no importamos getOneProduct
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
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
      })
      .finally(()=>setLoading(false))
  }, [itemId]);

  if (detalle === null) return <p>Cargando detalle…</p>;
  if (!detalle) return <p>No se encontró el producto con id "{itemId}".</p>;

  return (
    <>
      {loading
      ? <LoaderComponent />
      : <ItemDetail detalle={detalle} />
      }
    </>
  )
};

export default ItemDetailContainer;