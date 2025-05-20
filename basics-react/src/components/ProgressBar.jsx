import React, { useState } from 'react'

const ProgressBarCompo = ({ progress }) => {
    return (
        <div>
            <div className='border w-2/3 rounded-xl overflow-hidden'>
                <div className={`${progress <= 30 ? 'bg-red-500' : progress > 30 && progress < 70 ? 'bg-orange-400' : 'bg-green-500'} h-8 `} style={{ width: `${progress}%` }} ></div>
            </div>
        </div>
    )
}

export default function ProgressBar() {

    const [width, setWidth] = useState(30)

    return (
        <div className='ml-10 w-[70vw] space-y-2'>
            <div className='flex w-2/3 justify-between '>
                <h1 >Progress Bar</h1>
                <span>{width}%</span>
            </div>
            <ProgressBarCompo progress={width} />
            <div className='mt-5 space-x-2'>
                <button disabled={width <= 0} onClick={() => setWidth(width - 10)}
                    className='bg-red-600 py-1  px-3 rounded-xl text-white cursor-pointer'>Decrease</button>
                <button disabled={width >= 100} onClick={() => setWidth(width + 10)}
                    className='bg-green-500 py-1  px-3 rounded-xl text-white cursor-pointer'>Increase</button>
            </div>
        </div>
    )
}
