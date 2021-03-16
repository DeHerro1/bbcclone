import React, { useState } from 'react';
import './Inputs.css';
import GenerateImage from '../GenerateImage';

const Inputs = () => {
    const [image, setImage] = useState("");
    const [text, setText] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleText = (e) => {
        let value = e.target.value;
        setText(value);
    }

    const handleImage = (e) => {
        let value = e.target.files;
        const {preview } = GenerateImage(value);
        setImage(preview);
    }

    const handleAmount = (e) => {
        let value = parseFloat(e.target.value);
        setPrice(value);
    }

    const handleName = (e) => {
        let value = e.target.value;
        setName(value);
    }

    const sendData = (e) => {
        e.preventDefault();

        const imageData = {
            'title': name,
            'price': price,
            'description': text,
            'image': image

        }

        const data = {
            method: "POST",
            mode: 'no-cors',
            Headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(imageData)
        };
        fetch('http://test.anchoratechs.com/categories', data)
   .then(res => console.log(res.message, 'succeeful'))
   .catch(err => console.log(err, 'unsuccessful'))
    }

    return (
        <form className="inputs_form" >
            <h3>Get a product image, it's price, description and name.</h3>
            <div className="image_input">
                <label>Pick an image:</label>
                <input type="file" onChange={handleImage} />
            </div>

            <div className="image_text">
                <label>Enter product price:</label>
                <input type="text" onChange={handleAmount} />
            </div>

            <div className="image_text">
                <label>Name of product:</label>
                <textarea type="text" onChange={handleName} />
            </div>
            
            <div className="image_text">
                <label>Description of product:</label>
                <textarea type="text" onChange={handleText} />
            </div>
            
            <button onClick={sendData} className="image_submit_button">Submit</button>
        </form>
    )
}

export default Inputs;
