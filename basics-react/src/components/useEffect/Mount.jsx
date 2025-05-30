import React, { useEffect, useState } from 'react'

export default function UnMount() {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleWidth = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleWidth)
        console.log('handleSize')

        return () => {
            window.removeEventListener('resize', handleWidth)
            console.log('handleSize removed')
            // When this component will  unmount that time it will show clg msg 
        }
    }, [])


    return (
        <div>
            <h1 className='text-2xl font-semibold'>Window Width : {width}px </h1>
        </div>
    )
}