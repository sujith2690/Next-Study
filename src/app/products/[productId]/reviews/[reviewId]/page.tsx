import React from 'react'

export default async function ProductDetail({ params, }: { params: Promise<{ productId: string, reviewId: string }>; }) {

    const { productId, reviewId } = await params

    return (
        <div>Review :{reviewId} for the Product : {productId}</div>
    )
}
