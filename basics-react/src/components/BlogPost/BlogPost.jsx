import React from 'react'
import { blog } from './PostData'
import PostCard from './PostCard'

export default function BlogPost() {
    return (
        <div className='w-screen h-screen flex flex-col items-center mt-5'>
            <div className='space-y-4 '>
                <h1 className='text-2xl font-bold '>Blogs post</h1>
                <div className='grid gap-5'>
                    {
                        blog.map((blog, index) => (
                            <PostCard key={index} {...blog} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
