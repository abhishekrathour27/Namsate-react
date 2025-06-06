import React, { useState } from 'react'

export default function Chips() {
    const [input, setInput] = useState('');
    const [array, setArray] = useState([])


    const toggleBtn = (e) => {
        if (e.key === 'Enter') {
            const data = {
                id: array.length,
                name: input
            }
            setArray([...array, data])
            setInput('')
        }
    }
    const toggleDel = (id) => {
        setArray(
            array.filter((item)=> item.id !== id)
        )
    }

    return (
        <div className='m-10'>
            <div>
                <input
                    type="text"
                    placeholder='Enter text here'
                    className='border'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={toggleBtn}
                />

            </div>
            <div className='flex gap-5 mt-5'>
                {
                    array.map((item, id) => <div key={id} className='bg-gray-300 rounded-xl p-2 space-x-4'>
                        <span>{item.name}</span>
                        <button
                            onClick={()=> toggleDel(item.id)}
                            className='text-white cursor-pointer bg-red-500 rounded-full w-8 h-8'>X</button>
                    </div>)
                }
            </div>
        </div>
    )
}
