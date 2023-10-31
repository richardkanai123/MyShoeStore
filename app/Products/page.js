import React from 'react'


const Page = async () => {
    const res = await fetch(`${process.env.BASE_URL}/api/shoes`)
    if (!res.ok) {
        throw new Error("Fetching products failed")
    }
    const data = await res.json()

    return (
        <div className="w-full p-5">
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default Page