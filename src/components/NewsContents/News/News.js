import React from 'react';
import './News.css';

const News = ({text, url, link, img, content}) => {

    return (
        <div className="news" >
          <a href={url}>
          <img 
            src={img}
            alt={link}
            className="image" />
            <div className="text">
              <h4>{text}</h4>
              <p> {content} </p>
            </div>
            
          </a>  
        </div>
    )
}

export default News;