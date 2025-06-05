import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between px-20 text-xl text-cyan-500 items-center py-5 bg-gray-900'>
            <div>
                <h2 className='text-4xl font-semibold text-cyan-500'>LOGO</h2>
            </div>
            <div>
                <ul className='flex gap-10'>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
