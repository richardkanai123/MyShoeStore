import React from 'react'
import ProductCard from './ProductCard'

const ShoeList = ({ ShoesData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2">

            {
                ShoesData.map((shoe) => (
                    <ProductCard Shoe={shoe} key={shoe.shoeId} />
                ))
            }

        </div >
    )
}

export default ShoeList