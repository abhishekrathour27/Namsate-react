import React from 'react'
import { blog } from './PostData'


export default function PostCard({ heading, body, tags, reaction, view }) {


    return (
        <div>
            <div className='w-[40vw] bg-gray-300 px-5 py-6 rounded-xl space-y-5 '>
                <h1 className='font-semibold'>{heading}</h1>
                <p cl>{body}</p>
                <div className='space-x-2'>
                    {
                        tags.map((item, index) => (
                            <span className='text-blue-400'
                                key={index}>#{item}</span>
                        ))
                    }
                </div>
                <div className='space-x-3'>
                    <span>👍{reaction.likes}</span>
                    <span>👎{reaction.dislikes}</span>
                    <span> 👁️{view} view</span>
                </div>

            </div>
        </div>
    )
}
