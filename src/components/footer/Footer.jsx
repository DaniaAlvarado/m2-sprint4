import React from 'react';
import home from '../img/Svg (1).png';
import search from '../img/Svg (2).png';
import historial from '../img/Svg (3).png';
import profile from '../img/Svg (4).png';
import './footer.scss'

const Footer = () => {
    return (
        <div className='pages'>
            <img src={home} alt="home" />
            <img src={search} alt="search" />
            <img src={historial} alt="historial" />
            <img src={profile} alt="profile" />
        </div>
    )
}

export default Footer
