import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import {getProductsById} from '../../asynMock.jsx'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setproduct] = useState (null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setproduct(response)
            })
            .catch(error => {
                console.error (error)
            })
    },[itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer