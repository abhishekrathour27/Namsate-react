import React, { useRef, useState } from 'react'

export default function Ref() {

    const [count, setCount] = useState(0);

    let val = useRef(0);
    let btnRef = useRef();


    const countHandler = () => {

        val.current = val.current + 1;
        setCount(count + 1);
    }

    const changeColor = () => {
        btnRef.current.style.backgroundColor = 'red';
    }

    return (
        <div className='m-5 space-x-2'>

            <button
                ref={btnRef}
                onClick={countHandler}
                className='border'>Increament
            </button>
            <span>Count : {count}</span>
            <span>Val : {val.current}</span>

            <button
                onClick={changeColor}
                className='border'>changeColor
            </button>

        </div>
    )
}
