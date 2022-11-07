import React from 'react';
import search from '../img/Svg (2).png';
import back from '../img/Group 48.png';
import Footer from '../footer/Footer';
import './sAndO.scss';

const Search = () => {
    return (
        <div className='search'>
            <div className='search__container'>
                <nav className='search__input'>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search for a dish' />
                </nav>
                <aside className='search__historial'>
                    <span>Recent searches</span>
                    <div><img src={back} alt="back" />Pizza</div>
                    <div><img src={back} alt="back" />Pizza</div>
                </aside>
            </div>
            <Footer />
        </div>
    )
}

export default Search
