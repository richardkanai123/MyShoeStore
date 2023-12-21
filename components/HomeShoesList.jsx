import React, { Suspense } from 'react'
import ShoeList from './ShoeList'
import ProductCard from './ProductCard'



const getShoesData = async () => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/shoes`, {
            cache: "no-cache"
        })
        const data = await res.json()
        return data
    } catch (error) {

        throw new Error("Could not Fetch Shoes!")
    }

}
const HomeShoesList = async () => {
    const data = await getShoesData()
    console.log(data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2">

            <Suspense fallback={<p>Loading ....</p>}>
                {
                    data.map((shoe) => (
                        <ProductCard Shoe={shoe} key={shoe._id} />
                    ))

                }
            </Suspense>
        </div>
    )
}

export default HomeShoesList