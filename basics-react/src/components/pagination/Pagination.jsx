import React, { useEffect, useState } from 'react'
import Products from './Products';


export default function Pagination() {
  const page_size = 10;

  const array = [...Array(page_size)]

  const [item, setItem] = useState([])
  const [page , setPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=500');
    const jsonData = await data.json();
    setItem(jsonData.products);

  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const itemNo = item.length / page_size;
  const start = page * itemNo;
  const end = start + itemNo

  return (

    <div>
      <h1>Pagination</h1>
      <center className='my-5'>
        {
          array.map((i,index) => <span key={index} onClick={()=> setPage(index)}
          className='border p-2 cursor-pointer'>{index}</span>)
        }
      </center>
      <div className='flex flex-wrap'>
        {
          item.slice(start, end).map((i) => <Products key={i.id} image={i.thumbnail} title={i.title} />)

        }

      </div>
    </div>
  )
}
