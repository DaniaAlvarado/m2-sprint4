import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionGetOrderAsync } from '../../redux/actions/orderAction';
import Footer from '../footer/Footer';
import img from '../img/Mask group (1).png';
import './sAndO.scss';

const Orders = () => {
    const dispatch = useDispatch();

    const  {order}  = useSelector((store) => store.orderStore)
    //const user = useSelector((store) => store.userStore);

    useEffect(() => {
        dispatch(actionGetOrderAsync());
    }, [dispatch])

    console.log(order)

    // useEffect(() => {
    //     getOrderInfo()
    // }, [])

    // const [infoOrder, setInfoOrder] = useState([])
    // console.log(infoOrder)

    // const getOrderInfo = () => {
    //     //const orderData = orders.order.slice()
    //     const tempOrder = orders.find(order => order.user === user.email);
    //     setInfoOrder(tempOrder)
    // }
    

    // const orderFiltered = () => {
    //     if (orders.user === user.email){
    //         console.log('ha realizado ordenes')
    //     }
    //     else{
    //         console.log('no tiene ordenes')
    //     }
    // }
    
    return (
        <div className='orders'>
            <div className='orders__historial'>
                <span className='orders__title'>All orders</span>
                <article className='orders__restaurat'>
                    {
                        order && order.length ? (
                            order.map((order, index) => (
                                <aside key={index}>
                                    <div>
                                        <img src={order.image} alt="img" />
                                        <nav>
                                            <div>{order.name}</div>
                                            <div>{order.price}</div>
                                        </nav>
                                    </div>
                                    <span>Delivered</span>
                                </aside>
                            ))
                        ) : (
                            <div>no hay ordenes</div>
                        )
                    }
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default Orders
