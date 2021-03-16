import React from 'react';
import Image from './Image/Image';
import './Images.css';
import img from '../../assets/img.png';
import axios from 'axios';


// Where to display thie products....
// It is not done yet

const Layout = () => {

    // axios.get(`http://test.anchoratechs.com/items${id}`,{})
    // .then(res => {
    //     const data = res.data;
    //     console.log(data);
    // })
    // .then(error => console.log(error));

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
