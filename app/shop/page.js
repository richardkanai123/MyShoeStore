import ShoeList from "@/components/ShoeList"


const getShoesData = async () => {

    const res = await fetch(`https://nextcommerce-richardkanai123.vercel.app/api/shoes`)

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json()
    return data.Shoes

}

export default async function Shop() {

    const Shoes = await getShoesData();

    return (
        <div className="p-2 flex flex-col gap-2 ">
            <h1 className=" text-sky-400 text-xl font-bold mt-3 mb-2">Our Shoe Collection</h1>

            <ShoeList ShoesData={Shoes} />

        </div>
    )
}

