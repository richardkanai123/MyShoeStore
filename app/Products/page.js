import ProductCard from '@/components/ProductCard'


const Page = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/shoes`)
    if (!res.ok) {
        // throw new Error("Fetching products failed")
        console.log('Error occured')
    }
    const { Shoes } = await res.json()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 pb-2">
            {
                Shoes.map((shoe) => (
                    <ProductCard Shoe={shoe} key={shoe.shoeId} />
                ))
            }
        </div>
    )
}

export default Page