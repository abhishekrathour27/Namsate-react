import React, { useState } from 'react'

export default function NewTodo() {

    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const toggelAdd = () => {
        const data = {
            id: todo.length,
            name: input,
            check: false
        }
        setTodo([...todo, data]);
        setInput('')
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
                    return item;
                }
            })
        )
    }
    const handleDel = (id) => {
        setTodo(
            todo.filter((item) => item.id !== id)
        )
    }

    return (
        <div className='m-5'>
            <h1>Todo list</h1>
            <div>
                <input type="text" placeholder='Enter todo' className='border p-1'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button onClick={toggelAdd}
                    className='border p-1'>Add</button>
                <div >
                    {
                        todo.map((item, id) => <ul key={item.id} className='mt-2 space-x-1'>
                            <input type="checkbox" checked={item.check} onChange={() => handleCheck(item.id)} />
                            <span className={`${item.check ? 'line-through' : ''}`}>{item.name}</span>
                            <button onClick={() => handleDel(item.id)}
                                className='border'>X</button>
                        </ul>)
                    }
                </div>
            </div>
        </div>
    )
}
