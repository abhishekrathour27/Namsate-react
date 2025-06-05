import React, { useState } from 'react'

export default function About({about , setAbout}) {
   
    return (
        <div>
            <center className='font-bold'>About</center>
            <div className='m-5 border w-fit'>
                <input type="text" placeholder='This is about' 
                value={about} 
                onChange={(e) => setAbout(e.target.value)} />
            </div>
        </div>
    )
}
