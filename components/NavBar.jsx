'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import SettingsMenu from "./SettingsMenu"
import CartLink from "./CartLink"
import { ModeToggle } from "./ModeToggle"
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs"
import { LogInIcon, LogOutIcon } from "lucide-react"

const NavBar = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    const pathName = usePathname()

    const Navlinks = [
        // {
        //     tag: "Home",
        //     path: "/"
        // },
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
                <Link href='/' className="text-2xl md:text-4xl font-semibold md:font-extrabold p-1 text-blue-500 mr-4 hover:text-sky-600">BZ</Link>
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
                <CartLink />
            </section>

            <section className="flex items-center gap-4">
                <ModeToggle />
                {
                    isSignedIn ? <UserButton /> : <SignInButton />
                }
            </section>
        </nav>
    )
}

export default NavBar