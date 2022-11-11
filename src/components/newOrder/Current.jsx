import React from 'react';
import img from '../img/Group 49.png';
import food from '../img/Mask group (2).png';

const Current = () => {
    return (
        <div className='new'>
            <span className='new__title'>Current order</span>
            <nav className='new__img'>
                <img src={img} alt="img" />
                <span>1:25 min</span>
            </nav>
            <article className='new__buy'>
                <aside className='new__order'>
                    <img src={food} alt="food" />
                    <span>1</span>                       
                    <span>nombre</span>
                    <div>price</div>
                </aside>
            </article>
            <aside className='new__quantity'>
                <nav>
                    <span>Products</span>
                    <div>60.45$</div>
                </nav>
                <nav>
                    <span>Delivery</span>
                    <div>4.5$</div>
                </nav>
                <hr />
                <nav>
                    <span>Total</span>
                    <div>64.95$</div>
                </nav>
                <button>Support</button>
            </aside>
        </div>
    )
}

export default Current
