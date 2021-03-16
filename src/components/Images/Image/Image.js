import React from 'react';
import './Image.css';

const Image = ({ imageSrc, text}) => {
    return (
        <div className="img_container">
            <img 
                src={imageSrc}
                className="img"
                alt={text} />
            <p>{text}</p>
            <div className="change_butts">
                <button className="change_text_button">Change image text</button>
                <button className="delete_button">Delete</button>
            </div>
        </div>
    )
}

export default Image;