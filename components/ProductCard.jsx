'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'
import { Logos } from '@/logos'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Image from 'next/image'
import Link from 'next/link'
const ProductCard = ({ Shoe }) => {
    const { brandName, price, imageURL, shoeId } = Shoe

    const SelectLogo = Logos.filter((logo) => logo.brand === brandName)

    return (
        <Link href={`/shop/Product/${shoeId}`}>
            <Card id={shoeId} className={cn('w-full min-w-[90vw] cursor-pointer opacity-90 hover:filter transition-all ease-in md:min-w-[350px] hover:opacity-100 shadow-sm hover:shadow-inner  dark:shadow-teal-500 delay-75')}>
                <CardHeader>
                    <CardTitle>{brandName}</CardTitle>
                </CardHeader>
                <CardContent className={cn('relative mx-auto self-center w-full  mb-4 aspect-video object-center px-2 sm:max-w-full md:max-w-sm')}>
                    <Image src={imageURL} alt={brandName + shoeId} fill objectFit='contain' objectPosition='center' className={cn('rounded')} />
                </CardContent>
                <CardFooter>
                    <div className="w-full flex justify-around">
                        <Avatar className={cn(' object-cover bg-opacity-70')}>
                            <AvatarImage src={SelectLogo[0].logo} />
                            <AvatarFallback>{brandName}</AvatarFallback>
                        </Avatar>
                        <p className='text-xl font-semibold'>Ksh. {price}</p>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductCard