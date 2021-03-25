import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = ({text, url, link, img, content}) => {
  
  

    return (
        <div className="news" >
          <Link to={url}>
          <img 
            src={img}
            alt={link}
            className="image" />
            <div className="text">
              <h4>{text}</h4>
              <p> {content} </p>
            </div>
            
          </Link>  
        </div>
    )
}

export default News;