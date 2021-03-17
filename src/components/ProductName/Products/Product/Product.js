import React from 'react';
import './Product.css';

const Product = ({name}) => {
    console.log(name);
    return (
        <div className="product">
            <p>{ name }</p>
            <div className="product_buttons">
                <button className="edit_name">Edit name</button>
                <button className="delete_name">Delete</button>
            </div>
            
        </div>
    )
}

export default Product;
