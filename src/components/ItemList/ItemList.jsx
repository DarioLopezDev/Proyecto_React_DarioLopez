import './ItemList.css'
import Item from '../Item/Item.jsx'

const ItemList = ({Productos}) => {
    return (
        <div className='ListGroup'>
            {Productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList