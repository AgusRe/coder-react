import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from "../mock/AsyncService"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const {itemId} = useParams()

    useEffect(() => {
        getOneProduct(itemId)
        .then((response)=>setDetalle(response))
        .catch((error)=>console.error(error))
    },[])

    return (
        <ItemDetail detalle={detalle}/>
    )
}

export default ItemDetailContainer