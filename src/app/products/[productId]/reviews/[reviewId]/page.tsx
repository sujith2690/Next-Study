import { notFound } from "next/navigation";

export default async function ProductDetail({ params, }: { params: Promise<{ productId: string, reviewId: string }>; }) {

    const { productId, reviewId } = await params

    if (parseInt(reviewId) > 100) {
        notFound()
    }
    return (
        <div>Review :{reviewId} for the Product : {productId}</div>
    )
}
