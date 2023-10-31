import ProductCard from '@/components/ProductCard'
import React from 'react'


const Page = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/shoes`)
    if (!res.ok) {
        throw new Error("Fetching products failed")
    }
    const { Shoes } = await res.json()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
            {
                Shoes.map((shoe) => (
                    <ProductCard Shoe={shoe} key={shoe.shoeId} />
                ))
            }
        </div>
    )
}

export default Page