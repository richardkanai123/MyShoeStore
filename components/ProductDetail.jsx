'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Minus, Plus } from "lucide-react"


const ProductDetail = ({ shoe }) => {
    const { shoeId, brandName, category, price, sizes, colors, imageURL } = shoe

    // url manipulation
    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    // size
    const AddSizeToPathUrl = (shoeSize) => {
        const params = new URLSearchParams(searchParams)
        params.set('size', parseInt(shoeSize))
        replace(`${pathname}?${params}`)
    }
    // Color
    const AddColorToPathUrl = (shoeColor) => {
        const params = new URLSearchParams(searchParams)
        params.set('color', shoeColor)
        replace(`${pathname}?${params}`)
    }


    return (
        <div className="container py-2 px-4 flex flex-col items-center md:flex-row align-middle transition-all ease-in delay-75 md:gap-8">

            <div className="flex flex-col rounded sm:w-full mb-4  w-[300px] max-w-sm min-h-[350px] md:h-auto relative object-center object-cover overflow-hidden md:min-w-[350px] md:max-w-[450px] ">
                <Image src={imageURL} alt={brandName + category} fill className="object-cover h-full w-full" />

            </div>
            <div className="w-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{brandName}</h3>
                <div className="flex gap-2 w-full items-center align-middle flex-wrap mb-3">
                    {sizes.map((size) =>
                        <Button
                            id={size}
                            onClick={() => AddSizeToPathUrl(size)}
                            name='sizebutton' className={
                                searchParams.get('size') == parseInt(size) ? cn('bg-sky-200 hover:bg-sky-200 active:bg-sky-200 transition-all ease-in delay-75 ') : ('hover:bg-sky-200 active:bg-sky-200 transition-all ease-in delay-75')
                            } size='icon' key={size}>
                            {size}
                        </Button>)
                    }
                </div>
                <div className="flex gap-2 w-full items-center align-middle flex-wrap mb-3">
                    {colors.map((color) => <Button
                        onClick={() => AddColorToPathUrl(color)}
                        className={searchParams.get('color') === color ? cn('bg-sky-200 hover:bg-sky-200 active:bg-sky-200 transition-all ease-in delay-75') : ('hover:bg-sky-200 active:bg-sky-200 transition-all ease-in delay-75')}
                        key={color}>{color}</Button>)
                    }
                </div>

                <p className="p-2 w-full text-base pointer-events-none font-medium md:w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minima consequuntur odio vero eum, dignissimos libero saepe explicabo perspiciatis ullam?
                </p>

                <p className="text-3xl font-bold px-2">Ksh. {price}</p>
                <p className="p-2 w-full text-xs italic ">{category}</p>

                {
                    // <div className="w-full flex align-middle justify-center gap-3 mb-3 mt-2">

                    //     <Button
                    //         disabled={searchParams.get('q') == 1}
                    //         size='icon'
                    //         onClick={(e) => {
                    //             e.preventDefault()
                    //             const params = new URLSearchParams(searchParams)
                    //             if (searchParams.get('q') && parseInt(searchParams.get('q')) > 1) {
                    //                 const count = parseInt(searchParams.get('q'))
                    //                 params.set('q', parseInt(count - 1))
                    //                 replace(`${pathname}?${params}`)
                    //             }
                    //             else {
                    //                 params.set('q', 2)
                    //                 replace(`${pathname}?${params}`)

                    //             }

                    //         }}
                    //         className={cn('flex align-middle items-center justify-center font-extrabold')}>
                    //         <Minus />
                    //     </Button>

                    //     <span className="font-extrabold text-2xl">
                    //         {parseInt(searchParams.get('q')) || 1}
                    //     </span>

                    //     <Button
                    //         size='icon'

                    //         onClick={(e) => {
                    //             e.preventDefault()
                    //             const params = new URLSearchParams(searchParams)
                    //             if (searchParams.get('q') && parseInt(searchParams.get('q')) > 1) {
                    //                 const count = parseInt(searchParams.get('q'))
                    //                 params.set('q', parseInt(count + 1))
                    //                 replace(`${pathname}?${params}`)
                    //             }
                    //             else {

                    //                 params.set('q', 2)
                    //                 replace(`${pathname}?${params}`)

                    //             }

                    //         }} className={cn('flex align-middle')}>
                    //         <Plus />
                    //     </Button>
                    // </div>
                }

                <Button
                    onClick={() => {
                        console.log(searchParams.get('size'), searchParams.get('color'))
                    }}
                    className={cn('w-[250px] self-center hover:bg-opacity-50 hover:animate-pulse ')}>Add to Cart</Button>
            </div>

        </div >
    )
}

export default ProductDetail