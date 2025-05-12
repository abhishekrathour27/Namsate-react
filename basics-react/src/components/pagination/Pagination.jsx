import React, { useEffect, useState } from 'react'
import Products from './Products';

export default function Pagination() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);



    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products?limit=500');
        const jsonData = await data.json();
        setProducts(jsonData.products);
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(products)

    const PAGE_SIZE = 10;
    const pageNo = products.length / PAGE_SIZE;

    const start = page * pageNo;
    const end = start + pageNo;





    return (
        <div>
            <center className='my-5'>
                {
                    [...Array(PAGE_SIZE).keys()].map((item, index) => <span onClick={() => setPage(index)}
                        className={`${index === page ? 'bg-gray-300' : ''} border py-2 px-3 cursor-pointer`}>{item}</span>)
                }
            </center>
            <div className='flex flex-wrap'>
                {
                    products.slice(start, end).map((item) => <Products key={item.id} image={item.thumbnail} title={item.title} />)
                }
            </div>

        </div>
    )
}
