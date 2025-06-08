import React from 'react'
import NavbarCart from './NavbarCart'
import { cartItem } from './CartContext';

export default function Cart() {
      const { data } = cartItem();
      console.log(data)
    
    return (
        <div>
            <NavbarCart />
            <div>
                {
                  data.map((item)=> (
                    <div>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                  ))
                }
            </div>
        </div>
    )
}
