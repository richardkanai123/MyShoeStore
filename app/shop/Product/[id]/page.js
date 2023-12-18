import ProductDetail from '@/components/ProductDetail'
import React from 'react'

const ProductPage = async ({ params }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/shoes/id?id=${params.id}`)
    const data = await res.json()
    // console.log(data.data[0])
    // const shoeData = data.data[0]
    return data


    return (
        <ProductDetail shoe={shoe} />
    )
}

export default ProductPage