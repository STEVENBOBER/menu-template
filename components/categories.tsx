"use client"

import React from 'react';

import { menuDrinks } from '@/fake-data/data';
import { CategoryCard } from './category-card';


export const Categories = () => {
    return (
        <section
            className='scroll-mt-28 mb-28'
        >
            <div>
                {
                    menuDrinks.map((category, index) => (
                        <React.Fragment
                            key={`$-${index}`}
                        >
                            <CategoryCard {...category} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};





