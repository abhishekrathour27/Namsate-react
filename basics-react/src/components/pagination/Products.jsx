import React from 'react'

export default function Products({image , title}) {
  return (
    <div className='w-[200px] border m-2 p-3 bg-slate-300'>
        <img src={image} alt={title} />
        <span>{title}</span>
    </div>
  )
}
