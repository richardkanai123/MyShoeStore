import ProductCard from '@/components/ProductCard'
import ShoeList from '@/components/ShoeList'


const getShoes = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/shoes`,
        { cache: 'no-store' }
    )
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

            <h1 className="text-xl font-semibold text-center mb-3 mt-2">Our Shoes Selection</h1>
            <ShoeList ShoesData={shoesList} />
        </>
    )
}
