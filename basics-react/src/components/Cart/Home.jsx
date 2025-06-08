import React from 'react';
import { cartData } from './Data';
import NavbarCart from './NavbarCart';
import { cartItem } from './CartContext';

export default function Home() {
  const { ToggleCart } = cartItem();

  return (
    <div>
      <NavbarCart />
      <div className='grid grid-cols-4 p-4'>
        {
          cartData.map((item) => (
            <div key={item.id} className='space-y-3'>
              <img style={{ height: '200px' }} src={item.img} alt={item.name} />
              <span>{item.name}</span>
              <p>{item.price}</p>
              <button onClick={() => ToggleCart(item.name, item.img, item.price)}
                className='border'>Add To Cart</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}
