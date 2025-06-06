import React from 'react'
import { cartoons } from './data'
import MainCartoon from './MainCartoon'

export default function NameCard() {


    const filterData = cartoons.filter((item, magnitude) => magnitude % 2 === 0)

    return (
        <div>
           <MainCartoon filterData={filterData}/>
        </div>
    )
}
