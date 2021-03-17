import React, { useState } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import axios from '../../axios';
import './ProductName.css';
import Products from './Products/Products';

const ProductName = () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);

    let id;
    const handleName = (e) => {
        let value = e.target.value;
        setName(value);
    }

    const submitName = () => {

        id = Math.random() * 10000;
        console.log(id);

        const nameData = {
            "id": id,
            "name": name
        }
        
        setNames(prev => [...prev, {'title': name, id: Math.random() * 10000}]);
        axios({
            method: 'post',
            url:   "categories",
            data: nameData
        }).then(res => console.log(res, 'succeeful'))
          .catch(err => console.log(err, 'unsuccessful'))
    }

    return (
        <div>
            <div className="product_name">
                <label>Enter product Name:</label>
                <input type="text" value={name} onChange={handleName} />
            </div>
            <button className="submit_name_button" onClick={submitName}>Submit</button>

            <div className="product_categories">
               <Products />
            </div>
        </div>
    )
}

export default ProductName;
