import React from 'react'

export default async function ProductDetail({ params, }: { params: Promise<{ productId: string }>; }) {
    const productId = (await params).productId



    return (
        <div>Details about the Product : {productId}</div>
    )
}
