'use client'
import Image from "next/image";
import Link from "next/link";

const CartItemsLister = ({ item }) => {
    console.log(item);
    return (
        <div className="w-full flex items-center gap-4 h-[100px] mb-2 p-2 border-b-2 border-gray-400 dark:border-sky-200 " key={item._id}>
            <div className="flex flex-col items-center align-middle h-full">
                <Link
                    href={`/shop/Product/${item.shoeId._id}?id=${item.shoeId._id}&qnty=${item.quantity}&color=${item.color}`}
                    className="relative hover:zoom-in-110 hover:scale-150 hover:z-10  transition-all ease-in duration-300  h-[80%] w-[100px]">
                    <Image src={item.shoeId.image} alt={item.shoeId.shoeName} fill style={{
                        objectFit: 'contain',
                        objectPosition: 'center'
                    }} sizes="100%" />
                </Link>
                <p className="text-base font-semibold">{item.shoeId.shoeName}</p>
            </div>
            <div className="flex items-center gap-3 align-middle">
                <p className="text-base">Price: Ksh.{item.shoeId.price}</p>
                <p className="text-base">Quantity :{item.quantity}</p>
            </div>
        </div>

    )
}

export default CartItemsLister