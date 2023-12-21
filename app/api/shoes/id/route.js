import { Shoe } from "@/lib/Models/Shoe";
import ConnectMongoDB from "@/lib/db/Mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    try {
        await ConnectMongoDB()
        const Shoedata = await Shoe.findById(id)
        return NextResponse.json(Shoedata, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 })
    }
}
