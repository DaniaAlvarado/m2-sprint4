import React, { useEffect, useState } from 'react'
import svg from '../img/Svg.png';
import promo from '../img/Promo 1.png';
import promo2 from '../img/Promo 2 (1).png';
import promo3 from '../img/sopas-gourmet.jpg';
import food from '../img/image 4.png';
import restaurant2 from '../img/foodImg.jpg';
import restaurant from '../img/Mask group.png';
import star from '../img/Star 4.png';
import './home.scss';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionLogoutAsync } from '../../redux/actions/userAction';

const Home = ({ isAutentication }) => {

    const dispatch = useDispatch();
    //const { photoURL } = useSelector(store => store.user)
    const onCloseSession = () => {
        dispatch(actionLogoutAsync());
    };
    // const navigate = useNavigate()
    // const hola = () => {
    //     console.log('hi');
    // }

    // const initial = 0
    // const [index, setIndex] = useState(initial)
    // const nextImg = () => {
    //     setIndex(index + 1)
    //     console.log(index);
    // }
    // const [render, setRender] = useState(promo)
    // useEffect(() => {
    //     if (index === 0) {
    //         setRender(promo)
    //     }
    //     else if (index === 1) {
    //         setRender(promo2)

    //     }
    //     else if (index === 2) {
    //         setRender(promo3)

    //     }
    //     else if (index === 3) {
    //         navigate('/home')

    //     }

    // }, [index])

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
                <button onClick={onCloseSession}>cerrar sesion</button>
            </nav>
            <section>
                <img src={promo} alt="promo" />
                <img src={promo2} alt="promo2" />
                <img src={promo3} alt="promo2" />
            </section>
            <span>Restaurants and cafes</span>
            <aside className='buttons'>
                <button>All</button>
                <button><img src={food} alt="hamburger" />Fast food</button>
                <button><img src={food} alt="hamburger" />Pizza</button>
            </aside>
            <article className='restaurant'>
                <aside>
                    <figure className='image'>
                        <img src={restaurant2} alt="restaurant" />
                    </figure>
                    <nav className='info'>
                        <span>Pardes Restaurant</span>
                        <figure>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </figure>
                        <span>Work time 09:30 - 23:00</span>
                        <div>Before you 4$</div>
                    </nav>
                </aside>
                <aside>
                    <figure className='image'>
                        <img src={restaurant2} alt="restaurant" />
                    </figure>
                    <nav className='info'>
                        <span>Pardes Restaurant</span>
                        <figure>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </figure>
                        <span>Work time 09:30 - 23:00</span>
                        <div>Before you 4$</div>
                    </nav>
                </aside>
                <aside>
                    <figure className='image'>
                        <img src={restaurant2} alt="restaurant" />
                    </figure>
                    <nav className='info'>
                        <span>Pardes Restaurant</span>
                        <figure>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </figure>
                        <span>Work time 09:30 - 23:00</span>
                        <div>Before you 4$</div>
                    </nav>
                </aside>
            </article>
            <Footer />
        </div>
    )
}

export default Home
