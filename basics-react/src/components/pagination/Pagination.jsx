import React, { useEffect, useState } from 'react'
import Products from './Products';

export default function Pagination() {

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=500')
        const jsonData = await data.json();
        setProducts(jsonData.products)
    }

    useEffect(() => {
        fetchData();
    }, [])


    return !products.length ? <h1>Data is Not available</h1>
        : (
            <div className='grid grid-cols-5'>
                {
                    products.map((p) => <Products key={p.id} image={p.thumbnail} title={p.title} />)
                }
            </div>
        )
}
