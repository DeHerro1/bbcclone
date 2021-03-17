import React, { useState, useEffect } from 'react';
import './Products.css';
import Product from './Product/Product';
import axios from '../../../axios';

const Products = () => {
    const [items, setItems] = useState([]);

    // Destructuring data

    useEffect(() => {
        axios.get('/categories', {})
    .then(res => {
         setItems(res.data.data.map(item => item));
        console.log(res.data, 'succeeful')
    }
        )
      .catch(err => console.log(err, 'unsuccessful'))

    }, []);

    

    return (
        <div className="products">
            {
                items.map((dataValue => {
                    return (
                        <Product key={dataValue.id} name={dataValue.name} />
                    )
                }))
            }
        </div>
    )
}

export default Products;
