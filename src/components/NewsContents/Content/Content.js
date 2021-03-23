import React from 'react';
import './Content.css';
import { Link } from 'react-router-dom';

const Content = ({ img, text, url}) => {

    return (
        <div className="content">
            <Link to={url}>
                <img
                    className="content_img"
                    src={img}
                    alt={url} />
                <h3 className="content_text"> {text} </h3>
            </Link>
            
        </div>
    )
}

export default Content
