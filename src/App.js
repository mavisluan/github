import React from 'react';
import './App.css';
import { items } from './static-data'

const ItemsList = () => (
  <div className='items-list'>
    <ul>
      {items.map(item => (
        <li key={item.id}>
        </li>
      ))}
    </ul>
  </div>
  
)

export default ItemsList;
