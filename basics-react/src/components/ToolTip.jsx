import React, { useState } from 'react'

export default function ToolTip() {

  const [iconIndex, setIconIndex] = useState(null);

  const icons = [
    { emoji: '🏠', label: 'Home' },
    { emoji: '📧', label: 'Email' },
    { emoji: '⚙️', label: 'Settings' }
  ];

  return (
    <div className="tooltip-container flex gap-10 m-10">
      {icons.map((icon, index) => (
        <div
          onMouseEnter={() => setIconIndex(index)}
          onMouseLeave={() => setIconIndex(null)}
          key={index}
          className="tooltip-item relative"
        >
          <span className='cursor-pointer text-2xl'>{icon.emoji}</span>
          {
            iconIndex === index && <div className='absolute -top-8 -left-3 bg-gray-800 text-white w-fit py-1 px-3 rounded-xl'>
              {icon.label}
            </div>
          }

        </div>
      ))}
    </div>
  );

}
