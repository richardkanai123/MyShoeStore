'use client'
const AddNewProductPage = () => {
    // shoeId: 3,
    //     brandName: "Timberland",
    //         category: "Boot",
    //             price: 6500,
    //                 sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
    //                     colors: ["Brown", "Black"],
    return (
        <div className="container flex flex-col gap-2 pt-4">
            <div className="w-full flex items-center flex-col text-left">
                <label htmlFor="name" className="w-full text-base">Shoe Name</label>
                <input type="text" className="w-full bg-muted-foreground px-2 py-1 ring-0 outline-0 rounded text-base font-semibold  self-start max-w-sm" id="name" name="name" />
                <p className="text-sm text-red-300"></p>
            </div>
            <div className="w-full flex items-center flex-col text-left">
                <label htmlFor="brandName" className="w-full text-base">Brand</label>
                <input type="text" className="w-full bg-muted-foreground px-2 py-1 ring-0 outline-0 rounded text-base font-semibold  self-start max-w-sm" id="brandName" name="brandName" />
                <p className="text-sm text-red-300"></p>
            </div>

        </div>
    )
}

export default AddNewProductPage