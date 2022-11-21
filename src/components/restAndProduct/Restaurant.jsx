import React, { useEffect, useState } from 'react';
import img from '../img/Mask group (1).png';
import restaurant from '../img/Mask group.png';
import restaurant2 from '../img/foodImg.jpg';
import star from '../img/Star 4.png';
import food from '../img/Mask group (2).png';
import './rAndP.scss'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Restaurant = () => {

    const { id } = useParams();
    console.log(id);

    useEffect(()=> {
        getRestaurantInfo()
    }, [])

    const [infoRestaurant, setInfoRestaurant] = useState()
    const restaurants = useSelector((store) => store.restaurantStore);
    console.log(infoRestaurant)

    const getRestaurantInfo = () => {
        const restaurantData = restaurants.restaurant.slice()
        const tempRestaurant = restaurantData.find(restaurant => restaurant.id === id)
        setInfoRestaurant(tempRestaurant)
    }
    
    return (
        <>
        {
            infoRestaurant ? (
                <div className='restaurant'>
                <img className='logo' src={img} alt="img" />
                <article className='restaurant__info'>
                    <figure >
                        <img src={infoRestaurant.image} alt="restaurant" />
                    </figure>
                    <nav className='info'>
                        <span>{infoRestaurant.name}</span>
                        <div>{infoRestaurant.category}</div>
                        <figure>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </figure>
                        <div>{infoRestaurant.time}</div>
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
            ) : (
                <div>no</div>
            )
        }
        </>

    )
}

export default Restaurant
