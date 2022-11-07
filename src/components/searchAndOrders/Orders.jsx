import React from 'react'
import Footer from '../footer/Footer';
import img from '../img/Mask group (1).png';
import './sAndO.scss';

const Orders = () => {
    return (
        <div className='orders'>
            <div className='orders__historial'>
                <span className='orders__title'>All orders</span>
                <article className='orders__restaurat'>
                    <aside>
                        <div>
                            <img src={img} alt="img" />
                            <nav>
                                <div>Pardes restaurant</div>
                                <div>$ 55.20</div>
                            </nav>
                        </div>
                        <span>Delivered</span>
                    </aside>
                    <aside>
                        <div>
                            <img src={img} alt="img" />
                            <nav>
                                <div>Pardes restaurant</div>
                                <div>$ 55.20</div>
                            </nav>
                        </div>
                        <span>Delivered</span>
                    </aside>
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default Orders
