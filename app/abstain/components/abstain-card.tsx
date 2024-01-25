"use client"

import React, { useRef } from 'react'
import { abstainData } from '@/fake-data/data'


import { motion, useScroll, useTransform } from 'framer-motion'

type AbstainCardProps = (typeof abstainData)[number]


export const AbstainCard: React.FC<AbstainCardProps> = ({
    name,
    price,
    small,
    large
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0 p-6 sm:p-10"
        >
            <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex sm:flex-row flex-col h-full'>
                    <div className='flex flex-row items-center whitespace-nowrap'>
                        <h2 className='text-2xl font-semibold underline mr-2'>
                            {name}
                        </h2>
                        {name === "Soda" ?
                            <span className='text-2xl'>-{' '}16oz: ${small} | 24oz: ${large}</span> :
                            (<span className='text-2xl'>-{' '}${price}</span>)}
                    </div>
                </div>
            </section>
        </motion.div>
    )
}