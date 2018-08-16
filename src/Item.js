import React from 'react'
import ItemName from './ItemName'
import Time from './Time'

const Item = ({ item: {type, name, text, timestamp }}) => {
    return (
        <div className='item'>
            <div className='item-name'>
                <ItemName type={type} name={name} />
            </div>
            <div className='text'>
                <span>{text}</span>
            </div>
            <div className='time'>
                <Time time={timestamp} />
            </div>      
        </div>
        
    )
}

export default Item