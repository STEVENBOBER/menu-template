"use client"

import React from 'react';

import { wineData } from '@/fake-data/data';
import { motion, useTransform, useScroll } from "framer-motion";
import { WineCard } from './wine-card';



export const WineItems = () => {


    return (
        <section
            className='scroll-mt-28 mb-28'
        >
            <div>
                {
                    wineData.map((item, index) => (
                        <React.Fragment
                            key={`$-${index}`}
                        >
                            <WineCard {...item} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
};