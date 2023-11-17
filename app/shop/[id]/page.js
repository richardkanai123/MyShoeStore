import ProductDetail from '@/components/ProductDetail'
import React from 'react'

const ProductPage = async ({ params }) => {
    // http://localhost:3000/api/shoes?id=5
    const FetchShoe = async (shoeID) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/shoes?id=${shoeID}`)
        if (!res.ok) {
            throw new Error('Shoe not found')
        }

        const data = await res.json()
        return data.data[0]
    }

    const shoeData = await FetchShoe(params.id)

    return (
        <ProductDetail shoe={shoeData} />
    )
}

export default ProductPage