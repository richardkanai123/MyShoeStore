import React, { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'


const ShoeList = ({ ShoesData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2">
            <h1 className='text-lg font-bold text-center tracking-wider'>Featured Shoes</h1>

            <Suspense fallback={<p>Loading ....</p>}>
                {
                    ShoesData.map((shoe) => (
                        <ProductCard Shoe={shoe} key={shoe.shoeId} />
                    ))

                }
            </Suspense>
        </div >
    )
}

export default ShoeList