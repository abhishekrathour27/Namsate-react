import React, { useState } from 'react'

export default function GuessNum() {

    const [guess, setGuess] = useState(() => parseInt(Math.random() * 100 + 1));

    const [input, setInput] = useState('');
    const [msg, setMsg] = useState('');

    const toggleBtn = (e) => {

        if (e.key === 'Enter') {
            const userInput = Number(input)

            if (isNaN(userInput)) {
                setMsg('Please Enter a vakid Number');
                setInput('')
            }

            if (userInput === guess) {
                setMsg('Congrats You guessed right')
                setInput('')

            }
            else if (userInput > guess) {
                setMsg('Too High ! Try again')
                setInput('')

            }
            else {
                setMsg('Too Low ! Try again')
                setInput('')

            }
        }

    }


    return (
        <div className='m-5'>
            <div className='space-x-3'>
                <input type="text" placeholder='Enter the Number' value={input} onKeyDown={toggleBtn} onChange={(e) => setInput(e.target.value)}
                    className='border p-1' />
                <div className='mt-2'>{msg}</div>
            </div>
        </div>
    )
}
