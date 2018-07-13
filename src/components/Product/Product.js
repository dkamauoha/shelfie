import React from 'react';

export default function Product (props) {
    return (
        <div>
            <h4>{props.product.name}</h4>
            <h4>{props.product.price}</h4>
            <img src={props.product.image_url}/>
            <button onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
        </div>
    )
}