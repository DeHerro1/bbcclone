import React from 'react';
import './Content.css';

const Content = ({contentClass, contentImg, contentText, img, text, url}) => {

    return (
        <div className={contentClass}>
            <a href={url}>
                <img
                    className={contentImg}
                    src={img}
                    alt={url} />
                <h3 className={contentText}> {text} </h3>
            </a>
            
        </div>
    )
}

export default Content
