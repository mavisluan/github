import React from 'react'

const ItemName = ({ type, name }) => {
    const icon = 
        type === 'folder' 
        ? <i class="fas fa-folder"></i> 
        : <i class="far fa-file-alt"></i>

    return (
        <div>
            <span>{icon}</span>
            <a>{name}</a>
        </div>        
    )
}

export default ItemName