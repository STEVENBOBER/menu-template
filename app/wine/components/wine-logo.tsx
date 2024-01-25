import React from 'react'
import Image from 'next/image'
import images from '@/assets/images'

export const WineLogo = () => {
    return (
        <div className="w-full mb-20" >
            <div className="flex justify-center text-2xl font-bold py-4">
                <Image
                    src={images.wine}
                    alt="wine-logo"
                    width={275}
                    height={100}
                    quality="95"
                    priority={true}
                    className="object-cover border-[0.35rem] border-gray-900 shadow-xl rounded-[10%] hover:shadow-lg hover:scale-105 transition-transform"
                />
            </div>
        </div>
    )
}