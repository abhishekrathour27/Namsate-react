import React, { useState } from 'react'

export default function Form() {

    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState({})

    const handleSubmit = (e) => {

        e.preventDefault();

        const newError = {
            email: '',
            password: ''
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!mail) {
            newError.email = 'Enter your Email'
        }

        if (!emailRegex.test(mail)) {
            newError.email = 'Enter valid mail'
        }
        if (!pass) {
            newError.password = 'Enter your pass'
        }
        if (pass.length < 6) {
            newError.password = 'password must be 6 character'
        }

        setError(newError);

        console.log(`Email : ${mail} , pass : ${pass}`)


    }

    return (

        <div className='m-5'>
            <h1>Login</h1>
            <div className='flex flex-col w-fit gap-2'>
                <input type="email" placeholder='Enter your email' value={mail} onChange={(e) => setMail(e.target.value)}
                    className='border p-1' />
                <div className='text-red-500'>{error.email}</div>
                <input type="password" placeholder='Enter password' value={pass} onChange={(e) => setPass(e.target.value)}
                    className='border p-1' />
                <div className='text-red-500'>{error.password}</div>
                <button className='border' onClick={handleSubmit}>Submit</button>
            </div>
        </div>

    )
}
