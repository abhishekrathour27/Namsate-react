import React from 'react'

export default function Products({ image, title }) {
  return (
    <div>
      <div className='border w-[200px] h-[250px] m-2' >
        <img src={image} alt={title} width={'200px'} />
        <span>{title}</span>
      </div>
    </div>
  )
}
