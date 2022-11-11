import React from 'react';
import svg from '../img/Svg.png';
import food from '../img/Mask group (2).png';
import './new.scss';

const NewOrder = () => {
    return (
        <div className='new'>
            <span className='new__title'>New order</span>
            <nav className='new__ubication'>
                <aside className='deliver'>DELIVER TO</aside>
                <div>

                    <img src={svg} alt="svg" />
                    <aside>882 Well St, New-York</aside>
                </div>
            </nav>
            <section className='new__payment'>
                <span>Payment</span>
                <aside>
                    <button>Cash</button>
                    <button>MarterCard</button>
                    <button>PayPal</button>
                </aside>
            </section>
            <article className='new__buy'>
                <aside className='new__order'>
                    <img src={food} alt="food" />
                    <nav className='counter'>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </nav>
                    <span>nombre</span>
                    <div>price</div>
                </aside>
                <aside className='new__order'>
                    <img src={food} alt="food" />
                    <nav className='counter'>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </nav>
                    <span>nombre</span>
                    <div>price</div>
                </aside>
            </article>
            <div className='new__note'>
                <span>Note</span>
                <input type="text" placeholder='Write something'/>
            </div>
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
                <button>Order</button>
            </aside>
        </div>
    )
}

export default NewOrder
