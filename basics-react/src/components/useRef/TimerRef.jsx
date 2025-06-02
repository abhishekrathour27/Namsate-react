import React, { useRef, useState } from 'react'

export default function TimerRef() {

    const [time, setTime] = useState(0);

    const timeRef = useRef(null);

    const handleStart = () => {
        timeRef.current = setInterval(() => {
            setTime( time => time + 1);
        }, 1000);
    }
    const handleStop = () => {
        clearInterval(timeRef.current);
    }
    const handleReset = () => {
        handleStop();
        setTime(0);
    }

    return (
        <div className='m-5'>
            <span>StopWatch : {time} </span>

            <div className='flex flex-col w-fit gap-2'>
                <button
                    onClick={handleStart}
                    className='border'>start</button>
                <button
                    onClick={handleStop}
                    className='border'>stop</button>
                <button
                    onClick={handleReset}
                    className='border'>reset</button>
            </div>
        </div>
    )
}
