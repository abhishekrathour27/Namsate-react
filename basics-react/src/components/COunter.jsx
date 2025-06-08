import React from 'react'
import { useCount } from './context/CounterContext'

const COunter = () => {

    const {counter, increaseCOunt, decrementCount } = useCount()


    return (
        <div className='px-20'>
            <h1>Hello page</h1>
            <h1>Hello page</h1>
            <h1>Hello page</h1>
            {counter}
            <button onClick={increaseCOunt}>increment</button>
            <button onClick={decrementCount}>decrement</button>
        </div>
    )
}

export default COunter
