import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [apiData, setApiData] = useState([]);
    const [loading, setloading] = useState(true);

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products');
        const jsonData = await data.json();
        setApiData(jsonData.products)
        setloading(false);
    }
    useEffect(() => {
        fetchData();
    }, [])

    console.log(apiData)


    return (
        <div>
            {
                loading ?
                    <h1 className='text-xl font-semibold'>Loding...</h1> :

                    <ul>
                        {
                            apiData.map((data) => <div>
                                <p>{data.title}</p>
                            </div>)
                        }
                    </ul>

            }
        </div>
    )
}