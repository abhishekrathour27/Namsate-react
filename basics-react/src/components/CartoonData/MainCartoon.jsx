import React from 'react'

export default function MainCartoon({ filterData }) {
    return (
        <div>
            {
                filterData.map((item )=> (
                    <h1 key={item.id}>{item.name}</h1>
                ))
            }
        </div>
    )
}
