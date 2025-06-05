import React, { useEffect, useState } from 'react'

export default function DarkMode() {

  const [isDark, setIsDark] = useState(false)

  const toggleDark = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.body.style.backgroundColor = 'white'
    }
    else {
      document.body.style.backgroundColor = 'black'
    }
  }

  return (
    <div className='m-10'>
      <h1 className={` text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>Dark mode Toggle</h1>
      <div
        onClick={toggleDark}
        className={`h-8 w-18 border rounded-full cursor-pointer  flex items-center p-1 transition-colors duration-300
       ${isDark ? 'bg-green-400' : 'bg-gray-400'} `}>

        <div
          className={`h-6 w-6 rounded-full bg-white transition-all duration-300
          ${isDark ? 'translate-x-10' : 'translate-x-0'}`}>

        </div>
      </div>
    </div>
  )
}
