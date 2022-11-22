import React, { useEffect, useState } from 'react';
import img from '../img/Mask group (1).png';
import star from '../img/Star 4.png';
import './rAndP.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionFilterFoodAsync, actionGetFoodAsync } from '../../redux/actions/restaurantAction';
import { categoryFood } from '../../services/data';

const Restaurant = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { name } = useParams();
    //console.log(name);

    useEffect(() => {
        getRestaurantInfo()
    }, [])

    const [infoRestaurant, setInfoRestaurant] = useState()
    //const [foodInfo, setFoodInfo] = useState()
    const restaurants = useSelector((store) => store.restaurantStore);
    //console.log(infoRestaurant)

    const { food } = useSelector((store) => store.foodStore);
    //console.log(food)

    const getRestaurantInfo = () => {
        const restaurantData = restaurants.restaurant.slice()
        const tempRestaurant = restaurantData.find(restaurant => restaurant.name === name)
        setInfoRestaurant(tempRestaurant)
    }

    const foodFiltered = food.filter(item => item.id === name);
    //setFoodInfo(foodFiltered);
    //console.log(foodFiltered)

    const onFiltered = (searchValue) => {
        const searchParam = "category";
        dispatch(actionFilterFoodAsync(searchParam, searchValue));
    };

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
                            <button onClick={() => { dispatch(actionGetFoodAsync()) }}>All</button>
                            {categoryFood.map((item) => (
                                <button key={item.value} onClick={() => { onFiltered(item.label); }}>{item.label}</button>
                            ))
                            }
                        </aside>
                        <section className='restaurant__menu'>
                            {
                                foodFiltered.map((plato, index) => (
                                    <div key={index} className='restaurant__food' onClick={() => { navigate(`/product/${plato.name}`) }}>
                                        <img src={plato.image} alt="food" />
                                        <span>{plato.name}</span>
                                        <div>{plato.price}</div>
                                    </div>
                                ))
                            }
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
