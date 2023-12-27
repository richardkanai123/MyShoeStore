import connectMBD from "@/lib/MongoDB";
import { CartItems } from "@/lib/Models/Cart";
import { NextResponse } from "next/server";
import { auth, currentUser } from '@clerk/nextjs'




// console.log(userId);
export async function POST(req) {
    // user 
    const { userId } = auth();
    const url = new URL(req.url)
    await connectMBD();
    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    try {
        // item in cart contains this userid and shoeid
        const isShoeinCart = await CartItems.exists(
            {
                shoeId: url.searchParams.get('shoeId'),
                userId
            })

        if (isShoeinCart) {
            return NextResponse.json({ message: "Shoe Added to Cart!" }, { status: 403, statusText: "Item is already in Cart" })
            // do not add
        } else {
            // add item to cart
            const res = await CartItems.create({
                shoeId: url.searchParams.get('shoeId'),
                size: parseInt(url.searchParams.get('size')),
                color: url.searchParams.get('color'),
                userId,
                quantity: parseInt(url.searchParams.get('quantity')),
            })

            return NextResponse.json({ message: "Shoe Added to Cart!" }, { status: 201 })
        }

    } catch (error) {
        return NextResponse.json({ message: error._message || error.message }, { status: 406, statusText: error._message || error.message })
    }

}


export async function GET(req) {
    await connectMBD()
    const url = new URL(req.url)
    // const { userId } = auth();

    try {
        const shoesInCart = await CartItems.find({
            userId: url.searchParams.get('user'),

        }).populate("shoeId", ['image', 'stock', 'price', 'shoeName'])

        if (shoesInCart.length === 0) {
            return NextResponse.json({ message: "No items in cart" }, { status: 202 })
        }
        else {
            return NextResponse.json(shoesInCart, { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 })

    }

}