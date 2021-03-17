import React, {useState, useEffect} from 'react';
import './Item.css';
import axios from '../../../axios';

const Item = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        axios.get('/items', {})
        .then(res => {
            setItems(res.data.data.map(item => item));
           console.log(res.data, 'succeeful')
       }
           )
         .catch(err => console.log(err, 'unsuccessful'))
    }, [])

    console.log(items);

    return (
        <div>
            {
                items.map((dataValue => {
                    return (
                        <div key={dataValue.id}>
                            <h3> {dataValue.title} </h3>
                            <img src={dataValue.image} alt={dataValue.title} />
                            <p> {dataValue.price}</p>
                            <button>Edit item</button>
                            <button>Delete item</button>
                        </div>
                    )
                }))
            }
        </div>
    )
}

export default Item;
