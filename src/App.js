import React from 'react';
import './App.css';
import Item from './Item'
import { items } from './static-data'

const ItemsList = () => (
  <div className='items-list'>
    <ul >
      {items.map(item => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  </div>
  
)

export default ItemsList;
