import CartItemsLister from '@/components/CartItemsLister'
import { currentUser, auth } from '@clerk/nextjs'
import React, { Suspense } from 'react'

const GetCartData = async () => {
    const { userId } = auth()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/cart?user=${userId}`, {
        cache: "no-cache",
    })

    if (res.status !== 200) {
        throw new Error('Failed to fetch data')
    }
    const Items = await res.json()
    return Items
}
const CartPage = async () => {

    const Items = await GetCartData()


    return (
        <div className='flex flex-col gap-2 container'>
            <h1 className="text-xl underline underline-offset-1 animate-in duration-75 delay-75 ">Your Cart</h1>
            <div className='w-full px-4 py-2 flex  flex-col'>
                <Suspense fallback={<p className='text-sm italic'>Loading Cart items....</p>}>
                    {

                        Items.map((item) => <CartItemsLister key={item._id} item={item} />)
                    }
                </Suspense>
            </div>
        </div>
    )
}


export default CartPage