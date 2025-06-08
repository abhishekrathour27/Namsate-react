import React from 'react'
import { useNavigate } from 'react-router';

export default function NavbarCart() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 shadow-md">
            <nav className="container mx-auto px-4 py-3">
                <ul className="flex space-x-6 font-semibold text-gray-700">
                    <li onClick={() => navigate('/')}
                        className="cursor-pointer hover:text-blue-500">Home</li>
                    <li onClick={() => navigate('/cart')}
                        className="cursor-pointer hover:text-blue-500">Cart</li>
                </ul>
            </nav>
        </div>
    )
}
