import ShoeList from "@/components/ShoeList"


const getShoesData = async () => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/shoes`)
        const data = await res.json()
        return data.Shoes

    } catch (error) {
        console.log(error)
    }

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

