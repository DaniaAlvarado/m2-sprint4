import React from 'react'
import svg from '../img/Svg.png';
import promo from '../img/Promo 1.png';
import food from '../img/image 4.png';
import restaurant from '../img/Mask group.png';
import star from '../img/Star 4.png';
import './home.scss';
import Footer from '../footer/Footer';

const Home = () => {
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
            </nav>
            <section>
                <img src={promo} alt="promo" />
                <img src={promo} alt="promo2" />
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
                        <img src={restaurant} alt="restaurant" />
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
                        <img src={restaurant} alt="restaurant" />
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
                        <img src={restaurant} alt="restaurant" />
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
