import React, { useRef } from 'react'
import { featuredDrinks } from '@/fake-data/data'




import { motion, useScroll, useTransform } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'

type FeaturedCardProps = (typeof featuredDrinks)[number]


export const FeaturedCard: React.FC<FeaturedCardProps> = ({
    name,
    sizes,
    souvenir_flask,
    description
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    // sm:group-even:ml-[18rem]
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0 p-6 sm:p-10"
        >
            <section className='bg-gray-100 max-w-[35rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20' >
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full' >
                    <h2
                        className='text-2xl font-semibold underline'
                    >
                        {name}
                    </h2>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white' >
                        12oz:{' '}${sizes['12oz']}{'  '} | {'  '}
                        16oz:{' '}${sizes['16oz']}
                    </p>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white' >
                        Souvenir Flask:{' '}${souvenir_flask}
                    </p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto' >
                        {
                            description.map((item, index) => (
                                <li
                                    key={index}
                                    className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                                >{item}</li>
                            ))}
                    </ul>
                </div>
            </section>
        </motion.div>
    )
}

