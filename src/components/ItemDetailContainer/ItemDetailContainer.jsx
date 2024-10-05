import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import {doc, getDoc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [Productos, setProductos] = useState (null)

    const [loading, setLoading] = useState (true)

    const {itemId} = useParams()

    useEffect(() => {
        console.log("itemId:", itemId); // Verifica el ID
        const fetchData = async () => {
            setLoading(true);
            const docRef = doc(db, 'Productos', itemId);
            try {
                const response = await getDoc(docRef);
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProductos(productAdapted);
                } else {
                    console.error('Producto no encontrado');
                    setProductos(null); // Asegúrate de que se maneje correctamente
                }
            } catch (error) {
                console.error('Error al obtener el producto:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [itemId]);

    if (loading) {
        return <div>Cargando...</div>; // Mensaje de carga
    }

    if (!Productos) {
        return <div>No se encontraron datos del producto.</div>; // Mensaje si no hay datos
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...Productos}/>
        </div>
    )
}

export default ItemDetailContainer