import React from 'react'

const Register = () => {
    return (
        <div className='main'>
            <div className='account'>
                <h2>Create account</h2>
                <label>
                    NAME
                    <input type="text" />
                </label>
                <label>
                    EMAIL
                    <input type="email" />
                </label>
                <label>
                    PASSWORD
                    <input type="password" />
                </label>
            </div>
            <button>Sing in</button>
        </div>
    )
}

export default Register
