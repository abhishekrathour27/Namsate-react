import React, { useState } from 'react'

export default function Accordian() {
  
    const [show , setShow] = useState(false);

    return (
        <div className='m-5 text-white bg-gray-500 h-fit py-3 px-3 w-[40vw] rounded-xl '>
            <button onClick={()=> setShow(!show)}
             className='text-2xl flex justify-between w-full cursor-pointer'>
                <div>This is Accordian </div>
                {show ? <div> -</div> : <div>+</div>}
            </button>
            <div className={`transition-all ease-in-out duration-400  ${show ? ' max-h-40 opacity-100' : ' max-h-0 opacity-0'}`}>
                <p >Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}
