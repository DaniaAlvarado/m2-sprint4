import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import svg from '../img/Svg.png';
//import food from '../img/Mask group (2).png';
import './new.scss';

const NewOrder = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    //console.log(name);

    useEffect(() => {
        getFoodInfo()
    }, [])

    const [infoFood, setInfoFood] = useState()

    const specific = useSelector((store) => store.foodStore)
    //console.log(infoFood)

    const getFoodInfo = () => {
        const foodData = specific.food.slice()
        const tempFood = foodData.find(food => food.name === name)
        setInfoFood(tempFood)
    }

    const [cantidadFood, setCantidadFood] = useState(1);

    const handleClick = (operation) => {
        if (operation === "plus") {
            const incremento = cantidadFood + 1;

            setCantidadFood(incremento);
        } else {
            const decremento = cantidadFood - 1;
            setCantidadFood(decremento);
        }
    };

    return (
        <>
            {
                infoFood ? (
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
                                <button value='Cash'>Cash</button>
                                <button value='MarterCard'>MarterCard</button>
                                <button value='PayPal'>PayPal</button>
                            </aside>
                        </section>
                        <article className='new__buy'>
                            <aside className='new__order'>
                                <img src={infoFood.image} alt="food" />
                                <nav className='counter'>
                                    <button disabled={cantidadFood <= 1}
                                    onClick={() => {
                                        handleClick("minus");
                                    }}>-</button>
                                    <span>{cantidadFood}</span>
                                    <button onClick={() => {
                                    handleClick("plus");
                                }}>+</button>
                                </nav>
                                <span>{infoFood.name}</span>
                                <div>{cantidadFood * infoFood.price}</div>
                            </aside>
                        </article>
                        <div className='new__note'>
                            <span>Note</span>
                            <input type="text" placeholder='Write something' />
                        </div>
                        <aside className='new__quantity'>
                            <nav>
                                <span>Products</span>
                                <div>{cantidadFood * infoFood.price}</div>
                            </nav>
                            <nav>
                                <span>Delivery</span>
                                <div>0$</div>
                            </nav>
                            <hr />
                            <nav>
                                <span>Total</span>
                                <div>{cantidadFood * infoFood.price}</div>
                            </nav>
                            <button onClick={() => { navigate(`/current/${infoFood.name}`) }}>Order</button>
                        </aside>
                    </div>
                ) : (
                    <div>no hay plato seleccionado</div>
                )
            }
        </>

    )
}

export default NewOrder
