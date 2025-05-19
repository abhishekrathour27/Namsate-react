import React, { useState } from 'react'

export default function Chips() {
    const [input, setInput] = useState('')
    const [array, setArray] = useState([])


    const toggleBtn = (e) => {
        if (e.key === 'Enter') {
            const data = {
                id : array.length,
                name: input
            }
            setArray([...array, data])
            setInput('')
        }
    }
    const toggleDel = (id) => {
        setArray(
           array.filter((i)=> id !== i.id) 
        )
    }

    return (
        <div>
            <div>
                <input type="text" placeholder='Type here' className='border m-5 p-1' onKeyDown={toggleBtn}
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <div className='flex gap-3 m-3'>
                    {array.map((i, index) => <div key={index} className='bg-blue-500 px-4 py-2 rounded-2xl w-fit text-white space-x-5'>
                        <span>{i.name}</span>
                        <button onClick={()=> toggleDel(i.id)} className='text-red-600'>X</button>
                    </div>)}
                </div>
            </div>
        </div>
    )
}
