"use client"

import React from 'react';

import { beerData } from '@/fake-data/data';
import { BeerCard } from './beer-card';



export const BeerItems = () => {

    return (
        <section
            className='scroll-mt-28 mb-28'
        >
            <div>
                {
                    beerData.map((item, index) => (
                        <React.Fragment
                            key={`$-${index}`}
                        >
                            <BeerCard {...item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};