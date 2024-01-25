"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import images from '@/assets/images'

export const Logo = () => {
    return (
        <div className="w-full mb-20" >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20,
                    mass: 0.5,
                }}
                className="flex justify-center text-2xl font-bold py-4"
            >
                <Image
                    src={images.absintheLogo}
                    alt="header-logo"
                    width={250}
                    height={100}
                    quality="95"
                    priority={true}
                    className="object-cover border-[0.35rem] border-gray-900 shadow-xl rounded-[10%] hover:shadow-lg hover:scale-105 transition-transform"
                />
            </motion.div>
        </div>
    )
}