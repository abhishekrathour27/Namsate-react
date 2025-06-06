import React, { useState } from 'react'

export default function ImgLink() {
    const [img, setImg] = useState('');
    const [arr, setArr] = useState([]);

    const toggleAdd = () => {
        setArr([...arr, img]);
        setImg('');
    }
    const toggleDel = (index) => {
        const newArr = [...arr];
        newArr.splice(index, 1);
        setArr(newArr)
    }
    return (
        <div className='space-x-2 m-10'>
            <input
                type="text"
                placeholder='Enter Image Link'
                className='border'
                value={img}
                onChange={(e) => setImg(e.target.value)}
            />
            <button
                onClick={toggleAdd}
                className='border'>Add
            </button>
            <div>
                {
                    arr.map((img, index) => (<div key={index}>
                        <img style={{ height: '200px' }} src={img} alt={''} />
                        <button onClick={() => toggleDel(index)}
                            className='border'>Delete</button>
                    </div>

                    ))
                }
            </div>
        </div>
    )
}
