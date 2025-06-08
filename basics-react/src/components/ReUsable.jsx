import React, { useState } from 'react'
import { useCount } from './context/CounterContext'

export default function ReUsable() {
    const [value, setValue] = useState([])
    const [arr, setArr] = useState()
    const {counter, increaseCOunt, decrementCount } = useCount()



    return (
        <div>
            <div className='space-x-3'>
                <button className='border' onClick={() => setValue('Success Messege')}>Show Success</button>
                <button className='border' onClick={() => setValue('Error Messege')}>Show Error</button>
                <button className='border' onClick={() => setValue('Info Messege')}>Show Info</button>
            </div>
            <div>
                <span>{arr}</span>
                {counter}
                <button onClick={increaseCOunt}>increment</button>
                <button onClick={decrementCount}>decrement</button>
            </div>
        </div>
    )
}
