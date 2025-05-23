import React, { useState } from 'react'

export default function Validation() {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState({})

    const toggleSubmit = (e) => {
        e.preventDefault();

        const newError = {
            userName: '',
            email: '',
            password: ''
        }

        let succes = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            newError.userName = '*Enter username first'
            succes = false;
        }
        if (!emailRegex.test(mail)) {
            newError.email = '*Enter valid email'
            succes = false;
        }
        if (!mail) {
            newError.email = '*Enter email first'
            succes = false;
        }

        if (pass.length < 8) {
            newError.password = '*password must be 8 charcter'
            succes = false;
        }
        setError(newError)

        if (succes) {
            alert('Form submitted Successfully')
        }
    }

    return (
        <div className='m-5 border w-fit py-4 px-5 rounded-lg'>
            <form onSubmit={toggleSubmit}
                className='space-y-4'>
                <h1 className='text-xl font-semibold'>Sign up form</h1>
                <div>
                    <div>
                        <p>Username</p>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            className='border p-1'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className='text-red-500'>{error.userName}</div>
                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            type="text"
                            placeholder='Enter your E-mail'
                            className='border p-1'
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <div className='text-red-500'>{error.email}</div>
                    </div>
                    <div>
                        <p>Password</p>
                        <input
                            type="text"
                            placeholder='Enter your password'
                            className='border p-1'
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <div className='text-red-500'>{error.password}</div>
                    </div>
                    <button className='border p-1 w-full mt-2'>submit</button>
                </div>
            </form>
        </div>
    )
}
