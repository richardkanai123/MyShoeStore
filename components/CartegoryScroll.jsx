import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from "next/link"


export const Cartegories = [
    {
        name: "Vans",
        image: "https://images.unsplash.com/photo-1563183222-ff776d1076e1?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Boots",
        image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Heels",
        image: "https://images.unsplash.com/photo-1596702874230-b5706dfb5bc7?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Sneakers",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

export function ScrollAreaHorizontalDemo() {
    return (
        <ScrollArea className="justify-center items-center align-middle mx-auto whitespace-nowrap ">
            <div className="flex w-max space-x-4 p-4">
                {Cartegories.map((Cartegory) => (
                    <Link className="hover:opacity-80" key={Cartegory.name} href={`/Shop/?cartegory=${Cartegory.name}`} >

                        <figure key={Cartegory.name} className=" flex-1 shrink-0">
                            <div className="overflow-hidden rounded-md">
                                <Image
                                    src={Cartegory.image}
                                    alt={Cartegory.name}
                                    className="aspect-[3/4] h-fit w-fit object-cover"
                                    width={300}
                                    height={400}
                                />
                            </div>
                            <figcaption className=" text-center text-xl text-muted-foreground">
                                <span className="font-bold hover:underline text-accent-foreground ">
                                    {Cartegory.name}
                                </span>
                            </figcaption>
                        </figure>

                    </Link>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}
