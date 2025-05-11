import React from 'react'

export default function Products({image , title}) {
  return (
    <div className='border w-[250px] m-5 bg-indigo-500 text-white p-3'>
       <img src={image} alt={title} className='w-[200px]'/>
        <span>{title}</span>
    </div>
  )
}
