'use client'

import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

const NavBar = () => {
    const Navlinks = [
        {
            tag: "Home",
            path: "/"
        },
        {
            tag: "Shop",
            path: "/shop"
        },
        {
            tag: "Contact",
            path: "/Contact"
        }
    ]
    return (
        <nav className=" z-40 sticky top-0 mx-auto flex flex-row justify-between w-full px-4 py-2 items-center bg-transparent rounded-b-lg text-base md:text-xl font-semibold align-middle border-b snap-proximity shadow-md">
            <section className="flex gap-4 h-full align-middle items-center justify-around ">
                <Link href='/' className="text-2xl md:text-4xl font-semibold md:font-extrabold p-1 text-blue-500 mr-6 hover:text-sky-600">BZ</Link>
                {Navlinks.map((link) => (
                    <Link
                        key={link.tag}
                        className="text-blue-400 hover:text-sky-200 hover:underline active:underline"
                        href={`${link.path}`}>
                        {link.tag}
                    </Link>))
                }
            </section>
            <ModeToggle />
        </nav>
    )
}

export default NavBar