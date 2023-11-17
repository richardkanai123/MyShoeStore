'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"


const ProductDetail = ({ shoe }) => {
    const { shoeId, brandName, category, price, sizes, colors, imageURL } = shoe



    return (
        <div className="container py-2 px-4 flex flex-col items-center md:flex-row align-middle md:gap-8">

            <div className="flex flex-col rounded sm:w-full mb-4  w-[300px] max-w-sm min-h-[400px]  md:h-auto relative object-center object-cover overflow-hidden md:min-w-[350px] md:max-w-[450px] ">
                <Image src={imageURL} alt={brandName + category} fill objectFit="cover" />

            </div>
            <div className="w-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{brandName}</h3>
                <div className="flex gap-2 w-full items-center align-middle flex-wrap mb-3">
                    {sizes.map((size) => <Button
                        name='sizebutton' className={cn("hover:bg-slate-500 active:bg-sky-200")} size='icon' key={size}>
                        {size}
                    </Button>)
                    }
                </div>
                <div className="flex gap-2 w-full items-center align-middle flex-wrap mb-3">
                    {colors.map((color) => <Button
                        className={cn('w-[100px] hover:bg-opacity-50 hover:bg-slate-400 ')}
                        key={color}>{color}</Button>)
                    }
                </div>

                <p className="p-2 w-full text-base pointer-events-none font-normal md:w-1/2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minima consequuntur odio vero eum, dignissimos libero saepe explicabo perspiciatis ullam?
                </p>

                <p className="text-3xl font-bold px-2">Ksh. {price}</p>
                <p className="p-2 w-full text-xs italic ">{category}</p>
                <Button className={cn('w-[250px] hover:bg-opacity-50 hover:animate-pulse ')}>Add to Cart</Button>
            </div>

        </div >
    )
}

export default ProductDetail