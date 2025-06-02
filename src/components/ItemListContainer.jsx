import React, { useEffect, useState } from 'react'
import { getProducts } from "../mock/AsyncService"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({})
  const { itemId } = useParams()

  useEffect(() => {
    getProducts()
      .then((response) => {
        const producto = response.find((item) => item.id === itemId)
        setDetalle(producto)
      })
      .catch((error) => console.error(error))
  }, [itemId])

  return <ItemDetail detalle={detalle} />
}

export default ItemDetailContainer
