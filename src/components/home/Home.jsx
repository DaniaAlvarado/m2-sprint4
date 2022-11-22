import React, { useEffect  } from 'react'
import svg from '../img/Svg.png';
import promo from '../img/Promo 1.png';
import promo2 from '../img/Promo 2 (1).png';
//import promo3 from '../img/sopas-gourmet.jpg';
import food from '../img/image 4.png';
//import restaurant2 from '../img/foodImg.jpg';   "https://www.easypromosapp.com/blog/wp-content/uploads/header_ideas_de_promociones_para_restaurantes.jpg"
//import restaurant from '../img/Mask group.png';   "https://www.easypromosapp.com/blog/wp-content/uploads/header_ideas_de_promociones_para_restaurantes.jpg"
import star from '../img/Star 4.png';
import './home.scss';
import Footer from '../footer/Footer';
//import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionLogoutAsync } from '../../redux/actions/userAction';
import { actionFilterRestaurantAsync, actionGetFoodAsync, actionGetRestaurantAsync } from '../../redux/actions/restaurantAction';
import { category } from '../../services/data';
import { useNavigate } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //const { photoURL } = useSelector(store => store.user)
    const onCloseSession = () => {
        dispatch(actionLogoutAsync());
    };

    const { restaurant } = useSelector(store => store.restaurantStore);

    useEffect(() => {
        dispatch(actionGetRestaurantAsync());
        dispatch(actionGetFoodAsync());
    }, [dispatch])

    const onFiltered = (searchValue) => {
        const searchParam = "category";
        dispatch(actionFilterRestaurantAsync(searchParam, searchValue));
    };


    return (
        <div className='home'>
            <nav className='ubication'>
                <figure>
                    <img src={svg} alt="svg" />
                </figure>
                <div>
                    <aside className='deliver'>DELIVER TO</aside>
                    <aside>882 Well St, New-York</aside>
                </div>
                <button onClick={onCloseSession}>log out</button>
            </nav>
            {/* <Carousel className='Carousel'>
                    <Carousel.Item className=''>
                        <img
                            className="imgCarrusel d-flex w-100"
                            src={promo}
                            alt="promo"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imgCarrusel d-block w-100"
                            src={promo2}
                            alt="promo"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="imgCarrusel d-block w-100"
                            src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRgBoWGw5JvdDBsoZEB6dWVVUegC2yv_XuCRGZiMOFoHUCyj_J'
                            alt="promo"
                        />
                    </Carousel.Item>
            </Carousel> */}
            <section>
                <img src={promo} alt="promo" />
                <img src={promo2} alt="promo2" />
                <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRgBoWGw5JvdDBsoZEB6dWVVUegC2yv_XuCRGZiMOFoHUCyj_J' alt="promo2" />
            </section>
            <span>Restaurants and cafes</span>
            <aside className='buttons'>
                <button onClick={() => { dispatch(actionGetRestaurantAsync()) }}>All</button>
                {category.map((item) => (
                    <button key={item.value} onClick={() => { onFiltered(item.label); }}><img src={food} alt="hamburger" />{item.label}</button>
                ))
                }
            </aside>
            <article className='restaurant'>
                {restaurant && restaurant.length ? (
                    restaurant.map((restaurant, index) => (
                        <aside key={index} onClick={() => { navigate(`/restaurant/${restaurant.name}`) }}>
                            <figure className='image'>
                                <img src={restaurant.image} alt="restaurant" />
                            </figure>
                            <nav className='info'>
                                <span>{restaurant.name}</span>
                                <figure>
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                </figure>
                                <span>Work time {restaurant.time}</span>
                                <div>Before you {restaurant.before}</div>
                            </nav>
                        </aside>
                    ))
                ) : (
                    <></>
                )}

            </article>
            <Footer />
        </div>
    )
}

export default Home
