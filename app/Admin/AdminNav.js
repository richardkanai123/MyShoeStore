'use client'
import { Button } from '@/components/ui/button'
import { SignOutButton, UserButton } from '@clerk/nextjs'
import { ArrowLeftCircle, ArrowLeftCircleIcon, ArrowRightCircleIcon, Folders, LayoutDashboardIcon, MenuSquareIcon, ShoppingBasket, Users, WalletCardsIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const AdminNav = () => {
    const [openMenu, setOpenMenu] = useState(true)

    const searchParams = useSearchParams()
    const { replace } = useRouter()
    const pathname = usePathname()

    console.log(pathname);


    // links
    const Links = [
        {
            tag: "Dashboard",
            Icon: <LayoutDashboardIcon className='font-bold' />,
            path: '/Admin'
        },
        {
            tag: "Products",
            Icon: <ShoppingBasket className='font-bold' />,
            path: '/Admin/Products'
        },
        {
            tag: "Orders",
            Icon: <Folders className='font-bold' />,
            path: '/Admin/Orders'
        },
        {
            tag: "Customers",
            Icon: <Users className='font-bold' />,
            path: '/Admin/Customers'
        },
        {
            tag: "Transactions",
            Icon: <WalletCardsIcon className='font-bold' />,
            path: '/Admin/Transactions'
        }
    ]
    return (
        <div className={openMenu ? "absolute bg-background w-[75%] md:w-[200px] top-0 left-0 z-10 min-h-full py-4 flex flex-col transition-all ease-in opacity-100 delay-75 duration-150 " : "absolute bg-background w-[75px] md:w-[75px]   top-0 left-0 z-10 min-h-full py-4 flex flex-col transition-all ease-in opacity-70 delay-75 duration-150"}>
            <div className="self-start w-full border-b-2 border-slate-50 flex flex-row justify-around items-center">

                {
                    openMenu && <Link href='/Admin' className="text-2xl md:text-4xl font-semibold md:font-extrabold p-1 text-blue-500 mr-4 hover:text-sky-600">
                        Admin
                    </Link>
                }

                <Button onClick={() => setOpenMenu((prev) => !prev)} variant='ghost'>
                    {openMenu ? <ArrowLeftCircleIcon className='w-8 h-8 text-inherit' /> : <ArrowRightCircleIcon className='w-8 h-8 text-inherit' />}
                </Button>
            </div>

            <div className="flex flex-col gap-4 pt-4 ">
                {Links.map((link) =>
                    <Link
                        className='w-full p-2 overflow-hidden flex gap-1 md:gap-2 items-center  text-base font-semibold rounded-l-md border-2 hover:bg-slate-100 dark:hover:bg-sky-700 hover:overflow-visible transition-all delay-100 ease-in '
                        key={link.tag}
                        href={link.path}>
                        <span>{link.Icon}</span>
                        {link.tag}
                    </Link>)}
                <div className='flex gap-2 w-full items-center justify-around overflow-hidden transition-all ease-in delay-75'><UserButton /> <SignOutButton /> </div>
            </div>
        </div>
    )
}

export default AdminNav