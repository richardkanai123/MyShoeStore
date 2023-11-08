import ProductCard from '@/components/ProductCard'
import { Suspense } from 'react'


const Page = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/shoes`)
    if (!res.ok) {
        // throw new Error("Fetching products failed")
        console.log('Error occured')
    }
    const data = await res.json()


    return (
        <>

            <h1 className="text-xl font-semibold text-center">Our Shoes Selection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2">
                <Suspense fallback={<p>Loading Shoes</p>}>
                    {
                        data.Shoes.map((shoe) => (
                            <ProductCard Shoe={shoe} key={shoe.shoeId} />
                        ))
                    }
                </Suspense>
            </div >
        </>
    )
}

export default Page