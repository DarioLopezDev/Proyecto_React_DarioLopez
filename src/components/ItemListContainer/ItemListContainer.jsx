import React from 'react'
import './ItemListContainer.css'
const ItemListContainer = ({greeting}) => {
  return (
    <div className='Titulo'>
      <h1>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer