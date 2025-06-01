import React, { useState } from 'react'

export default function PersistValue() {

    const [count, setCount] = useState(0);

    const countHandler = () => {
        setCount(count++);
    }


    return (
        <div>
            <button onClick={countHandler}
                className='border'>Increament</button>
            <span>{count}</span>
        </div>
    )
}
