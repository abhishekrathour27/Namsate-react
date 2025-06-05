import React, { useState } from 'react'

export default function SideBar() {
  const [show, setShow] = useState(false);


  return (
    <div className=' h-screen w-full flex justify-end'>
      <ul onClick={() => setShow(!show)}
        className='space-y-2 mr-10 cursor-pointer mt-10'>
        <li className='w-8 bg-black h-1 rounded-full'></li>
        <li className='w-8 bg-black h-1 rounded-full'></li>
        <li className='w-8 bg-black h-1 rounded-full'></li>
      </ul>
      {
        show && <div className='w-1/3 h-full bg-indigo-500 text-white rounded-lg transition-all ease-in-out duration-500 '>
          <div className='flex flex-col gap-2 justify-center h-full ml-10'>
            <p className='cursor-pointer text-2xl font-bold'>Home</p>
            <p className='cursor-pointer text-2xl font-bold'>About</p>
            <p className='cursor-pointer text-2xl font-bold'>Contact</p>
            <p className='cursor-pointer text-2xl font-bold'>Help</p>
          </div>
        </div>
      }
    </div>
  )
}
