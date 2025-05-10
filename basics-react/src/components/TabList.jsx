import React, { useState } from 'react'

export default function TabList() {

    const [show, setShow] = useState(0)

    const homeSec = () => {
        return <div className='p-4'>
            <h1 className='font-semibold text-xl'>Home </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, possimus!</p>
        </div>
    }
    const aboutSec = () => {
        return <div className='p-4'>
            <h1 className='font-semibold text-xl'>About </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, possimus!</p>
        </div>
    }
    const contactSec = () => {
        return <div className='p-4'>
            <h1 className='font-semibold text-xl'>Contact </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, possimus!</p>
        </div>
    }


    const data = [
        {
            name: 'Home',
            component: homeSec()
        },
        {
            name: 'About',
            component: aboutSec()
        },
        {
            name: 'Contact',
            component: contactSec()
        }
    ]

    return (
        <div>
            <ul className='flex gap-10 m-5 text-gray-700'>
                {data.map((d, index) => <li key={index} onClick={() => setShow(index)} className='cursor-pointer'>{d.name}</li>
                )
                }
            </ul>
            <div className='m-5 border w-[70vw] h-[30vh]'>
                {data[show].component}
            </div>
        </div>
    )
}
