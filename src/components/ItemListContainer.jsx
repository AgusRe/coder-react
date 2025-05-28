import { getProducts } from "../mock/AsyncService"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if (categoryId) {
          // Filtra por categoría si existe
          setData(respuesta.filter((producto) => producto.category === categoryId))
        } else {
          // Muestra todo
          setData(respuesta)
        }
      })
      .catch((error) => console.error(error))
  }, [categoryId])

  return (
    <div>
      <h1>
        {greeting}
        {categoryId && <span> {categoryId}</span>}
      </h1>
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer
