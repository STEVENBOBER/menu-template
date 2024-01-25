import React from 'react'
import { BeerItems } from './components/beer-items'
import { BeerLogo } from './components/beer-logo'

export default function Beer() {
    return (
        <div className='flex flex-col items-center' >
            <BeerLogo />
            <BeerItems />
        </div>
    )
}

