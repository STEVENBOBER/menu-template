import React from 'react'
import { WineItems } from './components/wine-items'
import { WineLogo } from './components/wine-logo'

export default function Wine() {
    return (
        <div className='flex flex-col items-center' >
            <WineLogo />
            <WineItems />
        </div>
    )
}

