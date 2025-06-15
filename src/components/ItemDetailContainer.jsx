import React, { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncService';
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
    // Traemos un documento (1)
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