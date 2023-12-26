import { currentUser } from '@clerk/nextjs'
import React from 'react'

const CartPage = async () => {
    // [
    //     {
    //         "_id": "658b1a213677400f54f5c910",
    //         "shoeId": "65854cc46460701d5a5a75b6",
    //         "userId": "user_2ZiSUtBy4uQ9m0Zwy3guwA9y5LA",
    //         "quantity": 2,
    //         "color": "Black",
    //         "size": "43",
    //         "createdAt": "2023-12-26T18:23:29.856Z",
    //         "updatedAt": "2023-12-26T18:23:29.856Z",
    //         "__v": 0
    //     }
    // ]

    const user = await currentUser()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/cart?user=${user.id}`, {
        method: 'GET'
    })
    if (res.status === 204) {
        return (<div>
            <h1>No Items Found in Cart, go to Shop to see products</h1>
        </div>)
    }

    if (res.status === 400 || res.status === 404) {
        return (
            <div>
                <p className="text-red-500">An Error occured</p>
            </div>
        )
    }

    if (res.status === 200) {
        const cartData = await res.json()
        return (
            <div>
                {
                    cartData.map((item) => <pre key={item._id}> {item.shoeId} </pre>)
                }
            </div>
        )
    }
}

export default CartPage