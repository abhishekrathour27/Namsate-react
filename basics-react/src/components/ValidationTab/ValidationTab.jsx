import React, { useState } from 'react'
import Profile from './Profile'
import About from './About'
import Country from './Country'

export default function ValidationTab() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [about, setAbout] = useState('')

    const [index, setIndex] = useState(0)
    const [msg, setMsg] = useState('')

    const page = [
        {
            id: 1,
            name: 'Profile',
            component: <Profile
                name={name}
                mail={mail}
                pass={pass}
                setName={setName}
                setMail={setMail}
                setPass={setPass}
            />
        },
        {
            id: 2,
            name: 'About',
            component: <About about={about} setAbout={setAbout} />
        },
        {
            id: 3,
            name: 'Country',
            component: <Country />
        }
    ]

    const toggleNext = () => {
        if (index === 0) {
            if (name && mail && pass) {
                setIndex(1)
                setMsg('')
            }
            else {
                setMsg('*Fill All the feild')
            }
        }
        else if (index === 1) {
            if (about) {
                setIndex(2)
                setMsg('')
            }
            else {
                setMsg('*Fill All the feild')
            }
        }

    }
    const togglePreview = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    console.log(index)

    return (
        <div className='m-10'>
            <h1 className='font-semibold text-xl'>Tabs</h1>
            <div className='border w-[25vw] h-[30vh] my-1 '>
                {
                    page[index].component
                }
            </div>
            <span className='text-red-500'>{msg}</span>
            <div className='space-x-1'>
                {
                    index > 0 && (
                        <button onClick={togglePreview}
                            className='border'>Preview</button>
                    )
                }
                {
                    index < page.length - 1 && (
                        <button onClick={toggleNext} className='border'>Next</button>
                    )
                }

                {
                    index === page.length - 1 && (
                        <button onClick={() => alert('Successfully Submited')}
                            className='border'>Submit</button>
                    )
                }
            </div>

        </div>
    )
}
