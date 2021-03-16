import React from 'react';
import Image from './Image/Image';
import './Images.css';
import img from '../../assets/img.png';


const Layout = () => {
    return (
        <div className="images">
            <Image 
            imageSrc={img} 
            text="fine this was a remarkable day of my life because it contains a lot of ideas and things" />
            <Image imageSrc={img} text="fine" />
            <Image imageSrc={img} text="fine" />
            <Image imageSrc={img} text="fine" />
        </div>
    )
}

export default Layout;
