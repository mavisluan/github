import React from 'react'

const Item = ({ item: {type, name, text, timestamp }}) => {
    return (
        <div className='item'>
            <div className='item-name'>
                <span>{type}</span>
                <span>{name}</span>
            </div>
            <div className='text'>
                <span>{text}</span>
            </div>
            <div className='time'>
                <span>{timestamp}</span>
            </div>      
        </div>
        
    )
}

export default Item