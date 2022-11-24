import React from 'react'
import { useSelector } from 'react-redux';
import profile from '../img/Profile img.png';
import icon from '../img/Svg (12).png';

const Edit = () => {

    const user = useSelector((store) => store.userStore);

  return (
      <div className='profile'>
            <div className='profile__options'>
                <aside>
                    <img src={user.avatar} alt="profile" />
                </aside>
                <section>
                    <button>{user.name}  <img src={icon} alt="p" /></button>
                    <button>{user.email}  <img src={icon} alt="p" /></button>
                    <button>celular  <img src={icon} alt="p" /></button>
                    <button>tarjeta credito   <img src={icon} alt="p" /></button>
                </section>
            </div>
            <button>Save</button>
        </div>
  )
}

export default Edit
