import { Shoes } from "@/data";
import { NextResponse } from "next/server";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const q = searchParams.get('q')
    if (q === 'all' || q == null) {
        return NextResponse.json({ Shoes }, { status: 200 })
    } else {
        const data = Shoes.filter((shoe) => shoe.category.toLowerCase() == q.toLowerCase() || shoe.brandName == q.toLowerCase())
        console.log(data);
        return NextResponse.json({ data }, { status: 200 })
    }
}
