import { createContext, useContext, useState } from "react";
import { cartData } from "./Data";


const cartContext = createContext(null)
export const cartItem = () => {
    const cart = useContext(cartContext);
    return cart

}

export const CartProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const ToggleCart = (price, image, name) => {
        setData(prev => [...prev, { name: name, price: price, image: image }])
    }

    return (
        <cartContext.Provider value={{ data, setData, ToggleCart }}>
            {children}
        </cartContext.Provider>
    )
}
