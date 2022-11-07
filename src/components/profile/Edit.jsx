import React from 'react'
import profile from '../img/Profile img.png';
import icon from '../img/Svg (12).png';

const Edit = () => {
  return (
      <div className='profile'>
            <div className='profile__options'>
                <aside>
                    <span>nombre</span>
                    <img src={profile} alt="profile" />
                </aside>
                <section>
                    <button>Nombre  <img src={icon} alt="p" /></button>
                    <button>correo  <img src={icon} alt="p" /></button>
                    <button>celular  <img src={icon} alt="p" /></button>
                    <button>tarjeta credito   <img src={icon} alt="p" /></button>
                </section>
            </div>
            <button>Save</button>
        </div>
  )
}

export default Edit
