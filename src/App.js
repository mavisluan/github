import React from 'react';
import './App.css';
import Item from './Item'
import { items } from './static-data'

const ItemsList = () => (
  <div className='items-list'>
       {items.map(item => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
   </div>
  
)

export default ItemsList;
