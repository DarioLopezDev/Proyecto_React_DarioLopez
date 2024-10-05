import './ItemListContainer.css'

import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig.js'

const ItemListContainer = ({greeting}) => {
  const [Productos, setProductos] = useState ([])

  const [loading, setLoading] = useState(true)

  const {categoryId} = useParams()

  useEffect (() => {
    setLoading(true)

    const collectionRef = categoryId
      ? query(collection(db,'Productos'), where('category', '==', categoryId))
      : collection (db, 'Productos')

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data }
        })
        setProductos(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
    },[categoryId])

  return (
    <div>
      <h1>{greeting}</h1>
      {loading ? <h3>Loading...</h3> :<ItemList Productos={Productos}/>}
    </div>
  )
}

export default ItemListContainer