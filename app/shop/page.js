import ShoeList from "@/components/ShoeList"


async function getShoesData() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/shoes`, {
        cache: 'no-cache',
    }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()

}

const Page = async () => {
    if (`${process.env.NEXT_PUBLIC_BASEURL}` === undefined) {
        return null;
    }
    const data = await getShoesData()
    return (
        <div className="p-2 flex flex-col gap-2 ">
            <h1 className=" text-sky-400 text-xl font-bold mt-3 mb-2">Our Shoe Collection</h1>

            <ShoeList ShoesData={data.Shoes} />

        </div>
    )
}

export default Page