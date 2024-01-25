import React from 'react'
import { AbstainItems } from './components/abstain-items'
import { AbstainLogo } from './components/abstain-logo'

export default function Abstain() {
    return (
        <div className='flex flex-col items-center' >
            <AbstainLogo />
            <AbstainItems />
        </div>
    )
}

