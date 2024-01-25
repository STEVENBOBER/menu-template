"use client"

import React from 'react';

import { featuredDrinks } from '@/fake-data/data';
import { FeaturedCard } from './featured-card';



export const FeaturedItems = () => {


    return (
        <section
            className='scroll-mt-28 mb-28'
        >
            <div>
                {
                    featuredDrinks.map((item, index) => (
                        <React.Fragment
                            key={`$-${index}`}
                        >
                            <FeaturedCard {...item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};