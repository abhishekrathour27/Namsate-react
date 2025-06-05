import React, { useState } from 'react'

export default function Profile({ name, mail, pass, setName, setMail, setPass}) {
   
    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <center className='font-bold'>Profile</center>
            <div className='flex flex-col w-fit' >
                <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)}
                    className='border p-1' />
                <input type="email" placeholder='Enter your Email' value={mail} onChange={(e) => setMail(e.target.value)}
                    className='border p-1' />
                <input type="password" placeholder='Enter your Password' value={pass} onChange={(e) => setPass(e.target.value)}
                    className='border p-1' />
            </div >
        </div>
    )
}
