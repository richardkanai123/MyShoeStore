import ProductDetail from '@/components/ProductDetail'
import React from 'react'

const ProductPage = async ({ params }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/shoes/id?id=${params.id}`, { cache: 'no-cache' })
    if (res.status != 200) {
        throw new Error('Cannot find Shoe')
    }
    const data = await res.json()
    return (
        <ProductDetail shoe={data} />
    )

}

export default ProductPage