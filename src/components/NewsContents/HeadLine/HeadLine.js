import React from 'react';
import './HeadLine.css';

const HeadLine = ({text, url, link, img, content}) => {
  
  let path = url;

    return (
        <div className="head_line">
          <a href={path}>
          <img 
            src={img}
            alt={link}
            className="head_line_image" /></a>
            <div className="head_line_text">
              <h4>{text}</h4>
            </div>
            
            
        </div>
    )
}

export default HeadLine;