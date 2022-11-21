import React from 'react';
import { Link } from 'react-router-dom';
import home from '../img/Svg (1).png';
import search from '../img/Svg (2).png';
import historial from '../img/Svg (3).png';
import profile from '../img/Svg (4).png';
import './footer.scss'

const Footer = () => {
    return (
        <div className='pages'>
            <Link to='/home'><img src={home} alt="home" /></Link>
            <Link to='/search'><img src={search} alt="search" /></Link>
            <Link to='/orders'><img src={historial} alt="historial" /></Link>
            <Link to='/profile'><img src={profile} alt="profile" /></Link>
        </div>
    )
}

export default Footer
