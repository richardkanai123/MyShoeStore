import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const CartLink = () => {
    return (
        <Button variant='link' className={cn('w-full rounded-md relative')}>
            <Link className=' dark:text-sky-300 hover:text-sky-200 dark:hover:text-sky-200 underline' href={'/cart'}> <ShoppingCartIcon className="w-6 h-6 " /></Link>
            <span className=" text-lg text-yellow-500 font-extrabold">2</span>
        </Button>
    )
}

export default CartLink