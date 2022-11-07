import React from 'react';
import food from '../img/Mask group (2).png';
import './rAndP.scss'

const Product = () => {
    return (
        <div className='details'>
            <img src={food} alt="food" />
            <span>Caesar salad without sauge</span>
            <span>1:20 min</span>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            <nav>Additional Ingredients</nav>
            <aside className='details__ingredientes'>
                <div className='details__buttons'>
                    <button></button>
                    <div>Tomatoes</div>
                </div>
                <div className='details__buttons'>
                    <button></button>
                    <div>Grain</div>
                </div>
                <div className='details__buttons'>
                    <button></button>
                    <div>Lettuce leaf</div>
                </div>
            </aside>
            <aside className='details__cantidad'>
                <nav className='counter'>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </nav>
                <nav className='price'>
                    <div>add</div>
                    <span>14.90</span>
                </nav>
            </aside>
        </div>
    )
}

export default Product
