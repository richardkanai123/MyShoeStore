'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Minus, Plus, ShoppingCartIcon } from "lucide-react"
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";

const ProductDetail = ({ shoe }) => {
    const { _id, brandName, shoeName, category, price, sizes, colors, description, image } = shoe

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
    // Quantity
    const AddQntyToPathUrl = (shoeQnty) => {
        const params = new URLSearchParams(searchParams)
        params.set('qnty', shoeQnty)
        replace(`${pathname}?${params}`)
    }


    const { isSignedIn } = useUser()

    return (
        <div className="container py-2 px-4 flex flex-col items-center md:flex-row align-middle transition-all ease-in delay-75 md:gap-10">

            <div className="flex flex-col rounded sm:w-full mb-4  w-[300px] max-w-sm min-h-[400px] md:h-auto relative object-center overflow-hidden md:min-w-[350px] md:max-w-[50px] ">
                <Image src={image} alt={brandName + category} fill style={{
                    objectFit: "cover"
                }} className="rounded-sm" />

            </div>
            <div className="w-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{shoeName}</h3>
                <div className="flex gap-2 w-full items-center align-middle flex-wrap mb-3">
                    {sizes.map((size) =>
                        <Button
                            id={size}
                            onClick={() => AddSizeToPathUrl(size)}
                            name='sizebutton' className={
                                searchParams.get('size') == parseInt(size) ? cn('bg-sky-200 hover:bg-sky-200 active:bg-sky-200 transition-all ease-in ') : ('hover:bg-sky-200 active:bg-sky-200 transition-all ease-in')
                            } size='icon' key={size}>
                            {size}
                        </Button>)
                    }
                </div>
                <div className="flex gap-2 w-full items-center align-middle flex-wrap mb-3">
                    {colors.map((color) => <Button
                        onClick={() => AddColorToPathUrl(color)}
                        className={searchParams.get('color') === color ? cn('bg-sky-200 hover:bg-sky-200 active:bg-sky-200 transition-all ease-in ') : ('hover:bg-sky-200 active:bg-sky-200 transition-all ease-in ')}
                        key={color}>{color}</Button>)
                    }
                </div>

                <p className="p-2 w-full text-base pointer-events-none font-medium md:w-3/4">
                    {description}
                </p>

                <p className="text-3xl font-bold px-2">Ksh. {price}</p>
                <p className="p-2 w-full text-xs italic ">{category}</p>

                {
                    <div className="w-full flex align-middle justify-center gap-3 mb-3 mt-2">

                        <Button
                            disabled={searchParams.get('qnty') == 1}
                            size='icon'
                            scroll={false}
                            onClick={(e) => {
                                e.preventDefault()
                                const params = new URLSearchParams(searchParams)
                                if (searchParams.get('qnty') && parseInt(searchParams.get('qnty')) > 1) {
                                    const count = parseInt(searchParams.get('qnty'))
                                    params.set('qnty', parseInt(count - 1))
                                    replace(`${pathname}?${params}`)
                                }
                                else {
                                    params.set('qnty', 2)
                                    replace(`${pathname}?${params}`)

                                }

                            }}
                            className={cn('flex align-middle items-center justify-center font-extrabold')}>
                            <Minus />
                        </Button>

                        <span className="font-extrabold text-2xl">
                            {parseInt(searchParams.get('qnty')) || 1}
                        </span>

                        <Button
                            size='icon'
                            scroll={false}
                            onClick={(e) => {
                                e.preventDefault()
                                const params = new URLSearchParams(searchParams)
                                if (searchParams.get('qnty') && parseInt(searchParams.get('qnty')) > 1) {
                                    const count = parseInt(searchParams.get('qnty'))
                                    params.set('qnty', parseInt(count + 1))
                                    replace(`${pathname}?${params}`)

                                }
                                else {

                                    params.set('qnty', 2)
                                    replace(`${pathname}?${params}`)

                                }

                            }} className={cn('flex align-middle')}>
                            <Plus />
                        </Button>
                    </div>
                }

                {
                    isSignedIn ? <Button
                        onClick={() => {
                            console.log(searchParams.get('size'), searchParams.get('color'), searchParams.get('qnty'), _id)
                        }}
                        className={cn('w-[250px] self-center hover:bg-opacity-50 hover:bg-muted-foreground flex items-center gap-2 hover:animate-pulse ')}>Add to Cart <ShoppingCartIcon /> </Button>
                        :
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-sm font-semibold"> Sign in to Add to cart</p>
                            <SignInButton
                                className='text-white p-4 min-w-[250px] max-w-xs rounded-md bg-muted-foreground ' />
                        </div>
                }
            </div>

        </div >
    )
}

export default ProductDetail