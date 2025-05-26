import React, { useState } from 'react'

export default function ProgressBar() {

    const [width, setWidth] = useState(30)

    return (
        <div className='m-5'>
            <h1>Progress bar</h1>
            <div className='border w-[30vw] h-[5vh] rounded-xl overflow-hidden'>
                <div className={`${width >= 70 ? 'bg-green-500': width>=30 && width<70 ? 'bg-orange-500' : 'bg-red-500' } h-full`} style={{ width: `${width}%` }}></div>
            </div>
            <div className='mt-5 space-x-1'>
                <button
                    disabled={width === 100}
                    onClick={() => setWidth(width + 10)}
                    className='text-4xl bg-green-400 h-12 w-12 text-white px-2  rounded-full cursor-pointer'>+</button>
                <button
                    disabled={width === 0}
                    onClick={() => setWidth(width - 10)}
                    className='text-4xl bg-red-400 h-12 w-12 text-white px-2 py-0.5  rounded-full cursor-pointer'>-</button>
            </div>
        </div>
    )
}
