import React from 'react';
import img from '../img/Mask group (1).png';
import restaurant from '../img/Mask group.png';
import restaurant2 from '../img/foodImg.jpg';
import star from '../img/Star 4.png';
import food from '../img/Mask group (2).png';
import './rAndP.scss'

const Restaurant = () => {
    return (
        <div className='restaurant'>
            <img className='logo' src={img} alt="img" />
            <article className='restaurant__info'>
                <figure >
                    <img src={restaurant2} alt="restaurant" />
                </figure>
                <nav className='info'>
                    <span>Pardes Restaurant</span>
                    <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    <figure>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                    </figure>
                    <div>1: 25 min</div>
                </nav>
            </article>
            <aside className='restaurant__buttons'>
                <button>All</button>
                <button>Salates</button>
                <button>Pizza</button>
            </aside>
            <section className='restaurant__menu'>
                <div className='restaurant__food'>
                    <img src={food} alt="food" />
                    <span>Bolognese salad</span>
                    <div>$ 14.45</div>
                </div>
                <div className='restaurant__food'>
                    <img src={food} alt="food" />
                    <span>Bolognese salad</span>
                    <div>$ 14.45</div>
                </div>
                <div className='restaurant__food'>
                    <img src={food} alt="food" />
                    <span>Bolognese salad</span>
                    <div>$ 14.45</div>
                </div>
                <div className='restaurant__food'>
                    <img src={food} alt="food" />
                    <span>Bolognese salad</span>
                    <div>$ 14.45</div>
                </div>
                <div className='restaurant__food'>
                    <img src={food} alt="food" />
                    <span>Bolognese salad</span>
                    <div>$ 14.45</div>
                </div>
            </section>
        </div>
    )
}

export default Restaurant
