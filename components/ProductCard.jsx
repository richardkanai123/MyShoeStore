'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'
import { Logos } from '@/logos'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Image from 'next/image'
import { Button } from './ui/button'
const ProductCard = ({ Shoe }) => {
    const { brandName, price, imageURL, shoeId } = Shoe

    const SelectLogo = Logos.filter((logo) => logo.brand === brandName)
    console.log();

    return (
        <Card id={shoeId} className={cn('w-full min-w-[90vw] cursor-pointer hover:opacity-90 transition-all ease-in hover:shadow-lg md:min-w-[350px] dark:shadow-teal-500 ')}>
            <CardHeader>
                <CardTitle>{brandName}</CardTitle>
            </CardHeader>
            <CardContent className={cn('relative mx-auto self-center w-full  mb-4 aspect-video object-center px-2 sm:max-w-full md:max-w-sm')}>
                <Image src={imageURL} alt={brandName + shoeId} fill objectFit='cover' objectPosition='center' className={cn('rounded')} />
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

    )
}

export default ProductCard