import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = ({text, url, link, img}) => {
    return (
        <div className="news" >
          <Link to={url}>
          <img 
            src={img}
            alt='line'
            className="image" />
            <h3 className="text">{text}</h3>
          </Link>  
        </div>
    )
}

export default News;