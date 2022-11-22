import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './rAndP.scss'

const Product = () => {
    const navigate = useNavigate();
    const { name } = useParams();
    console.log(name);

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
                    <div className='details'>
                        <img src={infoFood.image} alt="food" />
                        <span>{infoFood.name}</span>
                        <span>1:20 min</span>
                        <div>{infoFood.description}</div>
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
                                <button disabled={cantidadFood <= 1}
                                    onClick={() => {
                                        handleClick("minus");
                                    }}>-</button>
                                <span>{cantidadFood}</span>
                                <button onClick={() => {
                                    handleClick("plus");
                                }}>+</button>
                            </nav>
                            <nav className='price' onClick={() => { navigate(`/newOrder/${infoFood.name}`) }}>
                                <div>add</div>
                                <span>{cantidadFood * infoFood.price}</span>
                            </nav>
                        </aside>
                    </div>
                ) : (
                    <div> no hay plato seleccionado</div>
                )
            }

        </>

    )
}

export default Product
