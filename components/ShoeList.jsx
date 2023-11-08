import React, { Suspense } from 'react'
import ProductCard from './ProductCard'

const ShoeList = ({ ShoesData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2">

            <Suspense fallback={<p>Loading ....</p>}>
                {
                    ShoesData ?
                        ShoesData.map((shoe) => (
                            <ProductCard Shoe={shoe} key={shoe.shoeId} />
                        ))
                        :
                        <p>No shoes found</p>
                }
            </Suspense>
        </div >
    )
}

export default ShoeList