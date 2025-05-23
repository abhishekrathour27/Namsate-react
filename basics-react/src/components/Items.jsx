import React from 'react'
import { doctorsData } from '../data/doctorData'

export default function Items({ itemInfo }) {
    return (
        <div className='grid grid-cols-6 '>
            {doctorsData.map((d, index) => (
                <div key={index} className='flex flex-col w-fit items-center border rounded-xl h-fit m-3'>
                    <div >
                        <img src={d.image} className='w-[200px] bg-cyan-200 rounded-t-xl' />
                        <div className='space-y-1 py-3'>
                            <p>{d.name}</p>
                            <p>{d.specialty}</p>
                            <p>Fee : {d.fee}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
