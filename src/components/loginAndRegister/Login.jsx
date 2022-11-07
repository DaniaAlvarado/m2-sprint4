import React from 'react'
import Logo from '../img/logo.png';
import './LandR.scss';

const Login = () => {
    return (
        <main className='main'>
            <div>
                <img src={Logo} alt="logo" />
                <h1>Sing in</h1>
                <p>Login or create an account with your
                    phone number to start ordering</p>
                <input type="number" />
                <hr />
            </div>
            <button>Login</button>
        </main>
    )
}

export default Login
