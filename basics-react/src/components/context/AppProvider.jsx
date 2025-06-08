import React from 'react'
import { CounterProvider } from './CounterContext'
import { CartProvider } from '../Cart/CartContext'

const AppProvider = ({ children }) => {
    return (
        <CounterProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </CounterProvider>
    )
}

export default AppProvider
