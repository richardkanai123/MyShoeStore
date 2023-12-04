import React from 'react'
import ShoeList from './ShoeList'



const getShoesData = async () => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/shoes`)
        const data = await res.json()
        return data.Shoes
    } catch (error) {

        throw new Error("Could not Fetch Shoes!")
    }

}
const HomeShoesList = async () => {
    const data = await getShoesData()

    return (
        <ShoeList ShoesData={data} />
    )
}

export default HomeShoesList