import { menuDrinks } from '@/fake-data/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type CategoryCardProps = (typeof menuDrinks)[number]

export const CategoryCard: React.FC<CategoryCardProps> = ({
    category,
    imageUrl,
    href
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                mass: 0.5,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20' >

                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]' >
                    <Link
                        href={`/${href}`}
                        className='text-2xl font-semibold underline'
                    >
                        {category}
                    </Link>
                </div>

                <Image
                    src={imageUrl}
                    alt="Categories"
                    quality={95}
                    priority={true}
                    className='absolute hidden sm:block top-8 -right-40 w-[25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40'
                />

            </section>

        </motion.div>
    )
}

