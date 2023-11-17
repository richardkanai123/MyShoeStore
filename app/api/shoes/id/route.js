import { Shoes } from "@/data";
import { NextResponse } from "next/server";

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const data = Shoes.filter((item) => item.shoeId === parseInt(id))

    if (data.length != 0) {
        return NextResponse.json({ data }, { status: 200 })
    }
    else {
        return NextResponse.json({ message: "No data Found!" }, { status: 404 })
    }
}
