import { getProducts } from "../mock/AsyncService"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
const ItemListContainer = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log(getProducts(),'promesa')
        // Primero ejecuta la promesa
        getProducts()
        .then((respuesta)=>setData(respuesta))
        .catch((error)=>console.error(error))
    },[])
    console.log(data, 'data')
    return (
        <div>
            <h1>{props.greeting}</h1>
            {/* data.map((producto)=> <p key={producto.id}>{producto.name}</p>) */}
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer