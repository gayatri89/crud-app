import React from 'react'

interface ItemListProps {
    items: string[];
}

const ItemList:React.FC<ItemListProps> = ({items}) => {
  return (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}      
    </ul>
  )
}

export default ItemList