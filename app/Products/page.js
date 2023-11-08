import { Suspense } from 'react'
import ProductCard from '@/components/ProductCard'


const getShoes = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/shoes`)
    if (!res.ok) {
        console.log('Error occured')
    }
    const data = await res.json()
    return data.Shoes
}
export default async function Page() {

    const shoesList = await getShoes()

    return (
        <>

            <h1 className="text-xl font-semibold text-center">Our Shoes Selection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2">
                <Suspense fallback={<p>Loading Shoes</p>}>
                    {
                        shoesList.map((shoe) => (
                            <ProductCard Shoe={shoe} key={shoe.shoeId} />
                        ))
                    }
                </Suspense>
            </div >
        </>
    )
}
