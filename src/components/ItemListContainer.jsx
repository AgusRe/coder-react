import { getProducts } from "../mock/AsyncService"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import LoaderComponent from "./LoaderComponent"

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
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
      .finally(()=> setLoading(false))
  }, [categoryId])

  return (
    <>
      {
        loading 
        ? <LoaderComponent/>
        :<div>
          <h1>
            {greeting}
            {categoryId && <span> {categoryId}</span>}
          </h1>
          <ItemList data={data} />
        </div>
      }
    </>
  )
}

export default ItemListContainer
