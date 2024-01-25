import React, { useRef } from 'react'
import { wineData } from '@/fake-data/data'
import { motion, useScroll, useTransform } from 'framer-motion'

type FeaturedCardProps = (typeof wineData)[number]

export const WineCard: React.FC<FeaturedCardProps> = ({
    name,
    glass,
    bottle,
    half_bottle,
    bottle_only,
    size
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
            <section className='bg-gray-100 max-w-[35rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20' >
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full' >
                    <div className='flex flex-col items-left whitespace-nowrap'>
                        <h2
                            className='text-2xl font-semibold underline'
                        >
                            {name}
                        </h2>
                        {size === "glass&bottle" &&
                            <>
                                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white' >
                                    GLASS: ${glass}
                                </p>
                                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white' >
                                    BOTTLE: ${bottle}
                                </p>
                            </>
                        }
                        {size === "half_bottle" &&
                            <>
                                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white' >
                                    1/2 BOTTLE: ${half_bottle}
                                </p>
                            </>
                        }
                        {size === "bottle_only" &&
                            <>
                                <p className='mt-2 leading-relaxed text-gray-700 dark:text-white' >
                                    BOTTLE ONLY: ${bottle_only}
                                </p>
                            </>
                        }
                    </div>
                </div>
            </section>
        </motion.div >
    )
}
