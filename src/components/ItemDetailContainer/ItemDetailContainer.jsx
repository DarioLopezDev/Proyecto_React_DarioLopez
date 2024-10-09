import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, getDocs,query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); // ID para buscar el producto específico

    useEffect (() => {
        setLoading(true)
    
        const collectionRef = itemId
          ? query(collection(db,'Productos'), where('id', '==', itemId))
          : collection (db, 'Productos')
    
        getDocs(collectionRef)
          .then(response => {
            const productsAdapted = response.docs.map(doc => {
              const data = doc.data()
              return {id: doc.id, ...data }
            })
            setProducto(productsAdapted)
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            setLoading(false)
          })
        },[itemId])
    
      return (
        <div>
          {loading ? <h3>Loading...</h3> :<ItemDetail Producto={producto}/>}
        </div>
      )
    }
    
    export default ItemDetailContainer