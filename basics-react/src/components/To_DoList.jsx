import React, { useState } from 'react'

export default function To_DoList() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);


  const toggleToDo = () => {
    const data = {
      id: input.length,
      name: input,
      check: false
    }
    setTodo([...todo, data])
    setInput('')

  }
  const toggleCheckBox = (id) => {
    setTodo(
      todo.map((i) => {

        if (i.id === id) {
          return {
            ...i, check: !i.check
          }
        }
        else {
          return i;
        }

      })
    )
  }
  const toggelDel = (id) => {
    setTodo(
      todo.filter((i) => id !== i.id)
    )
  }


  return (
    <div className='m-5 space-x-1'>
      <input type="text" className='border p-1' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={toggleToDo}
        className='border p-1 cursor-pointer'>Add</button>

      <div>
        {
          todo.map((i, id) => <div className='m-5 space-x-2 ' key={id}>
            <input type="checkbox" checked={i.check} onChange={() => toggleCheckBox(i.id)} />
            <span className={`${i.check ? 'line-through' : ''}`}>{i.name}</span>
            <button onClick={() => toggelDel(i.id)}
              className='border px-2  h-fit cursor-pointer'>X</button>
          </div>)
        }
      </div>
    </div>
  )
}
