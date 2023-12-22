import HomeShoesList from "@/components/HomeShoesList"


export default async function Shop() {

    return (
        <div className="p-2 flex flex-col gap-2 ">
            <h1 className=" text-sky-400 text-xl font-bold mt-3 mb-2">Our Shoe Collection</h1>

            <HomeShoesList />

        </div>
    )
}

