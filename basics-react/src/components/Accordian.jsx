import React, { useState } from 'react'

export default function Accordian() {

    const [show, setShow] = useState(false)

    return (
        <div className='m-5 bg-gray-400 text-white w-[20vw] h-fit pb-1 rounded-xl'>
            <div className=' flex items-center justify-between px-2 text-xl '>
                <span>Accordian</span>
                <span
                    onClick={() => setShow(!show)}
                    className='cursor-pointer text-4xl'>{show ? '-' : '+'}</span>
            </div>
            {
                show && (
                    <div className={`pl-2 transition-all ease-in-out duration-300 `}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, sed.</p>
                    </div>
                )
            }
        </div>
    )
}
