import React, { useState } from 'react'

export default function To_DoList() {

  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const addToList = () => {
    const newList = {
      id: list.length,
      name: input,
      check: false
    }
    setList([...list, newList]);
  }

  const toggleCheck = (id) => {
    setList(
      list.map((item) => {
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
  const toggleDel = (id) => {
    setList(
      list.filter((item) => item.id !== id)
    )
  }

  return (
    <div className='m-5'>
      <input type="text" placeholder='Add ToDo' value={input} onChange={(e) => setInput(e.target.value)}
        className='px-5 py-2 border rounded-lg' />
      <button onClick={addToList} className='border px-5 py-2 bg-black text-white rounded-lg'>ADD</button>

      <ul className='space-y-3'>
        {list.map((item) => <li key={item.id} className='space-x-2 mt-2'>
          <input type="checkbox" checked={item.check} onChange={() => toggleCheck(item.id)} />
          <span className={`${item.check ? 'line-through' : ''}`}>{item.name}</span>
          <button onClick={() => toggleDel(item.id)} className='border px-3 py-0.5 bg-black text-white rounded-lg'>Del</button>
        </li>)

        }
      </ul>
    </div>
  )
}
