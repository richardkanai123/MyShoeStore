import Image from "next/image"

const SuccessPage = () => {
    return (
        <div className=" flex flex-col items-center align-middle justify-center container">

            <div className="w-full h-[400px] relative">

                <Image src={'/ManAdded.png'} fill alt="success add" style={{
                    objectFit: 'contain'
                }} />
            </div>

            <h2 className="text-4xl text-center font-bold text-lime-400"> SUCCESS</h2>
            <p className="text-sm font-light italic text-lime-300">Added New Product</p>

        </div>
    )
}

export default SuccessPage