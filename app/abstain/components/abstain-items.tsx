"use client"

import React from 'react';

import { abstainData } from '@/fake-data/data';
import { AbstainCard } from './abstain-card';



export const AbstainItems = () => {

    return (
        <section
            className='scroll-mt-28 mb-28'
        >
            <div>
                {
                    abstainData.map((item, index) => (
                        <React.Fragment
                            key={`$-${index}`}
                        >
                            <AbstainCard {...item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};