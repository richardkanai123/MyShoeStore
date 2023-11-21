'use client'

import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { cn } from "@/lib/utils"


const NavBar = () => {

    const pathName = usePathname()

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
        <nav className=" z-40 sticky top-0 mx-auto flex flex-row justify-around w-full px-4 py-2 items-center bg-transparent rounded-b-lg text-base md:text-xl font-semibold align-middle border-b snap-proximity shadow-md">
            <section className="flex gap-4 h-full align-middle items-center justify-around ">
                <Link href='/' className="text-2xl md:text-4xl font-semibold md:font-extrabold p-1 text-blue-500 mr-6 hover:text-sky-600">BZ</Link>
                {Navlinks.map((link) => (
                    <Link
                        key={link.tag}
                        className={
                            pathName === `${link.path}` ? "text-sky-200 dark:text-sky-300 hover:text-sky-200 dark:hover:text-sky-200 underline" : "text-sky-700 dark:text-sky-500 hover:text-sky-200 dark:hover:text-sky-200 hover:underline active:underline"
                        }
                        href={`${link.path}`}>
                        {link.tag}
                    </Link>))
                }
            </section>

            <div className="p-1 flex items-center gap-4 align-middle">
                <Button variant='ghost' className={cn('p-2 rounded-md relative')} size='icon'>
                    <ShoppingCartIcon className="w-6 h-6" />
                    <span className="absolute text-lg text-yellow-500 font-extrabold top-0 left-0 z-10">2</span>
                </Button>
                <ModeToggle /></div>
        </nav>
    )
}

export default NavBar