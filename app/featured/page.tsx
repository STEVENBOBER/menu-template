import React from 'react'
import { FeaturedItems } from './components/featured-items'
import { FeaturedLogo } from './components/featured-logo'

export default function Featured() {
    return (
        <div className='flex flex-col items-center' >
            <FeaturedLogo />
            <FeaturedItems />
        </div>
    )
}

