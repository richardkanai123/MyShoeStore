import { Shoe } from "@/lib/Models/Shoe";
import ConnectMongoDB from "@/lib/db/Mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        await ConnectMongoDB()
        const Shoes = await Shoe.find()
        return NextResponse.json(Shoes, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 })

    }
}


export async function POST(request) {
    const { shoeName, price, brandName, sizes, colors, description, image, category, stock } = await request.json();
    try {
        await ConnectMongoDB()
        await Shoe.create({
            shoeName,
            price,
            brandName,
            image,
            description,
            sizes,
            colors,
            category,
            stock
        })

        return NextResponse.json({ message: "Shoe Added!" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 406 })

    }



}