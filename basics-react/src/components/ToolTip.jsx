import React, { useState } from 'react'

export default function ToolTip() {

  const [iconIndex, setIconIndex] = useState(null);

  const icons = [
    { emoji: '🏠', label: 'Home' },
    { emoji: '📧', label: 'Email' },
    { emoji: '⚙️', label: 'Settings' }
  ];

  return (
    <div className="tooltip-container flex gap-20 m-10">
      {
        icons.map((i, index) => <div key={index}
          onMouseEnter={()=> setIconIndex(index)}
          onMouseLeave={()=> setIconIndex(null)}
          className='relative'
        >
          <span className='cursor-pointer text-xl  '>{i.emoji}</span>
          {
            iconIndex === index && <div className='bg-black text-white absolute -top-8 rounded-sm px-2 py-0.5 -left-2 '>{i.label}</div>
          }
        </div>)
      }
    </div>
  );

}
