import React, { useState } from 'react'

export default function TabList() {

    const [show, setShow] = useState(0)

    const homeSec = () => {
        return (
            <div className='p-5'>
                <h1 className='text-lg font-semibold'>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia possimus alias laboriosam a!</p>
            </div>
        )
    }
    const aboutSec = () => {
        return (
            <div className='p-5'>
                <h1 className='text-lg font-semibold'>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia possimus alias laboriosam a!</p>
            </div>
        )
    }
    const contactSec = () => {
        return (
            <div className='p-5'>
                <h1 className='text-lg font-semibold'>Contact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia possimus alias laboriosam a!</p>
            </div>
        )
    }

    const data = [
        {
            name: 'Home',
            components: homeSec()
        },
        {
            name: 'About',
            components: aboutSec()
        },
        {
            name: 'Contact',
            components: contactSec()
        }
    ]


    return (
        <div>
            <ul className='flex gap-10 m-5'>
                {data.map((d, i) => <li key={i} onClick={() => setShow(i)} className='cursor-pointer'>
                    {d.name}
                </li>)
                }
            </ul>
            <div className='m-5 border w-3xl h-[20vh]'>
                {data[show].components}
            </div>
        </div>
    )
}
