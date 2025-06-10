'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

export default function notFound() {
    const pathName = usePathname()

    const productId = pathName.split("/")[2]
    const reviewId = pathName.split("/")[4]

    return (
        <div className='h-screen  flex flex-col items-center justify-center '>
            <h1 className='text-4xl'>404</h1>
            <p>
                Review {reviewId}: not found for product {productId}
            </p>
        </div>
    )
}
