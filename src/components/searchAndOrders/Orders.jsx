import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Footer from '../footer/Footer';
import img from '../img/Mask group (1).png';
import './sAndO.scss';

const Orders = () => {

    const { userOrder } = useSelector((store) => store.orderStore)
    const user = useSelector((store) => store.userStore);

    console.log(userOrder)

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
                    {/* {
                        // infoOrder && infoOrder.length ? (
                        //     infoOrder.map((order, index) => (
                        //         <aside key={index}>
                        //             <div>
                        //                 <img src={order.image} alt="img" />
                        //                 <nav>
                        //                     <div>{order.name}</div>
                        //                     <div>{order.price}</div>
                        //                 </nav>
                        //             </div>
                        //             <span>Delivered</span>
                        //         </aside>
                        //     ))
                        ) : (
                            <div>no hay ordenes</div>
                        )
                    } */}
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default Orders
