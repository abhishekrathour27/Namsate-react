import React, { useState } from 'react'

export default function To_DoList() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([]);

  const addToList = () => {
    const data = {
      id: list.length,
      name: input,
      check: false
    }
    setList([...list, data])
    setInput('')
  }
  const toggleCheck = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            check: !item.check
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
      <div className='space-x-2'>
        <input type="text" value={input} className='border ' onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addToList()} className='border'>ADD</button>
      </div>
      <ul className='mt-5'>
        {
          list.map((item) => <li key={item.id} className='space-x-2'>
            <input type="checkbox" checked={item.check} onChange={() => toggleCheck(item.id)} />
            <span className={`${item.check ? 'line-through' : ''}`}>{item.name}</span>
            <button onClick={() => toggleDel(item.id)}
              className='border'>del</button>
          </li>)
        }
      </ul>
    </div>
  )
}
