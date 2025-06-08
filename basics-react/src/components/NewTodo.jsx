import React, { useState } from 'react'

export default function NewTodo() {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const handleBtn = () => {
        const data = {
            id: todo.length,
            name: input,
            check: false
        }
        input ? setTodo(prev => [...prev, data]) : ''
        setInput('');

    }
    const handleCheck = (id) => {
        setTodo(
            todo.map((item) => {
                if (item.id === id) {
                    return {
                        ...item, check: !item.check
                    }
                }
                else {
                    return item
                }
            })
        )
    }
    const handleDelete = (id) => {
        setTodo(
            todo.filter((item) => id !== item.id)
        )
    }

    return (
        <div className='m-10'>
            <input type="text" placeholder='Enter name' value={input}
                onChange={(e) => setInput(e.target.value)}
                className='border rounded-lg h-7 px-3' />
            <button onClick={handleBtn}
                className='border px-2 py-1 bg-indigo-500 text-white rounded-xl ml-2 cursor-pointer'>Add</button>
            <div>
                {
                    todo.map((item) => <div key={item.id} className='space-x-3 mt-1'>
                        <input type="checkbox" checked={item.check} onChange={() => handleCheck(item.id)} />
                        <span className={`${item.check ? 'line-through text-red-500' : 'text-green-500'}`}>{item.name}</span>
                        <button onClick={() => handleDelete(item.id)}
                            className='border px-2 py-1 bg-indigo-500 text-white rounded-xl ml-2 cursor-pointer'>Delete</button>
                    </div>)
                }
            </div>
        </div>
    )
}
