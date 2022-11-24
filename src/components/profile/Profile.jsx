import React, { useEffect, useState } from 'react';
import profile from '../img/Profile img.png';
import icon from '../img/Svg (5).png';
import icon2 from '../img/Svg (6).png';
import icon3 from '../img/Svg (7).png';
import icon4 from '../img/Svg (8).png';
import icon5 from '../img/Svg (9).png';
import icon6 from '../img/Svg (10).png';
import icon7 from '../img/Svg (11).png';
import Footer from '../footer/Footer'
import './prof.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        userAdmin();
    }, [])

    const [admin, setAdmin] = useState(true)
    const user = useSelector((store) => store.userStore);

    const userAdmin = () => {
        if (user.email === 'dania26alvarado@gmail.com') {
            setAdmin(false)
        } 
    }


    return (
        <div className='profile'>
            <div className='profile__options'>
                <aside>
                    <img src={user.avatar} alt="profile" />
                    <span>{user.name}</span>
                </aside>
                <section>
                    <button  onClick={() => { navigate('/edit') }}><img src={icon} alt="p" />Account</button>
                    <button><img src={icon2} alt="p" />Account edit</button>
                    <button><img src={icon3} alt="p" />Payment</button>
                    <button><img src={icon4} alt="p" />Language</button>
                    <button><img src={icon5} alt="p" />Location</button>
                    <button><img src={icon6} alt="p" />FAQ</button>
                    <button><img src={icon7} alt="p" />Support</button>
                </section>
                <button onClick={() => { navigate('/addRestaurant') }} disabled={admin}>Add Restaurant</button>
                <button onClick={() => { navigate('/addFood') }} disabled={admin}>Add Food</button>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
