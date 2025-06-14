import { getProducts } from "../mock/AsyncService"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import LoaderComponent from "./LoaderComponent"
// Firebase y db
import {db} from "../service/firebase"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(false)


  // Trabajando con firebase

  useEffect(() => {

    setLoading(true)
    // Referenciamos la colección
    const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
    // Pedimos los documentos
    getDocs(productsCollection) // getDocs devuelve promesa:
    .then((res) => {
      // Procesamos la 'res' de firebase:
      const lista = res.docs.map((doc)=>{
        return {
          // Compila datos con data() y usa el doc.id (id de firebase)
          ...doc.data(),
          id:doc.id
        }
      })
      setData(lista)
    })
    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))
  },[])

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
