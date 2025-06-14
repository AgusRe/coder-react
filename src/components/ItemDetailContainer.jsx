import React, { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncService';  // ← ya no importamos getOneProduct
import ItemDetail from './ItemDetail';
import { Link, useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, doc, getDoc } from 'firebase/firestore';
import {db} from "../service/firebase"

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState(null);
  const { itemId } = useParams();
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false)
  // Firebase:

  useEffect(()=>{
    setLoading(true)
    // Conectamos a la colección:
    const productsCollection = collection(db,"productos")
    // Pedimos un documento en particular, creando una referencia al documento que queremos traer:
    const docRef = doc(productsCollection, itemId)
    // Traemos el documento (1)
    getDoc(docRef)
    .then((res) => {
      if(res.data()){
        setDetalle({...res.data(), id:res.id})
      }
      else {
        setInvalid(true)
      }
    })
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
    
  },[])

  // useEffect(() => {
  //   setLoading(true)
  //   setDetalle(null);
  //   getProducts()
  //     .then((response) => {
  //       const producto = response.find(
  //         item => String(item.id) === String(itemId)
  //       );
  //       setDetalle(producto || false);
  //     })
  //     .catch((error) => {
  //       console.error('Error al cargar detalle:', error);
  //       setDetalle(false);
  //     })
  //     .finally(()=>setLoading(false))
  // }, [itemId]);

  // if (detalle === null) return <p>Cargando detalle…</p>;
  // if (!detalle) return <p>No se encontró el producto con id "{itemId}".</p>;
  if (invalid) {
    return (
      <div className="text-center py-5">
        <h2>Este producto no existe.</h2>
        <Link className="btn btn-dark" to="/">Volver al Inicio</Link>
      </div>
    )
  }

  if (loading || detalle === null) {
    return <LoaderComponent />
  }

  return <ItemDetail detalle={detalle} />
}

export default ItemDetailContainer;