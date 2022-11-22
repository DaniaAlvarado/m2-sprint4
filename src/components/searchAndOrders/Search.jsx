import React, { useEffect} from 'react';
import search from '../img/Svg (2).png';
import back from '../img/Group 48.png';
import Footer from '../footer/Footer';
import './sAndO.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { actionFilterAsync } from '../../redux/actions/restaurantAction';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();

    const { food } = useSelector(store => store.foodStore);
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();

    useEffect(() =>{
        dispatch(actionFilterAsync())
    }, [dispatch])

    const onSearch = (data) => {
        const searchParam = data.search
        console.log(searchParam);
        dispatch(actionFilterAsync(searchParam));
    }  

    const renderFood = ({target}) => {
        if (target.value.trim() === '') {
            dispatch(actionFilterAsync());
          }
    }

    return (
        <div className='search'>
            <div className='search__container'>
                <nav className='search__input'>
                    <form onSubmit={handleSubmit(onSearch)}>
                    <button type='submit'><img src={search} alt="" /></button>
                    <input type="text" placeholder='Search for a dish' 
                    {...register('search', {required:true})} onChange={renderFood}/>
                    </form>
                </nav>
                <aside className='search__historial'>
                    <span>Recent searches</span>
                    <div><img src={back} alt="back" />Pizza</div>
                    <div><img src={back} alt="back" />Pizza</div>
                </aside>
                <section className='search__food'>
                    {food && food.length ? (
                        food.map((food, index) =>(
                            <div key={index} onClick={() => { navigate(`/product/${food.name}`) }}>
                                <img src={food.image} alt="food" />
                                <span>{food.name}</span>
                                <span>price: {food.price}</span>
                            </div>
                        ))
                    ) : (
                        <></>
                    )}
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Search
