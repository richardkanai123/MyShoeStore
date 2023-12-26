'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'
import { Logos } from '@/logos'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Image from 'next/image'
import Link from 'next/link'
const ProductCard = ({ Shoe }) => {
    const { brandName, price, shoeName, image, _id } = Shoe

    const SelectLogo = Logos.filter((logo) => logo.brand === brandName)

    return (
        <Link href={`/shop/Product/${_id}?id=${_id}&qnty=1`}>
            <Card id={_id} className={cn('w-full min-w-[90vw] bg-slate-100 dark:bg-sky-950 cursor-pointer opacity-90 hover:filter transition-all ease-in md:min-w-[350px] hover:opacity-100 shadow-sm hover:shadow-inner  dark:shadow-teal-500 delay-75')}>
                <CardHeader>
                    <CardTitle>{shoeName}</CardTitle>
                </CardHeader>
                <CardContent className={cn('relative mx-auto self-center w-full  mb-4 aspect-video object-center px-2 sm:max-w-full md:max-w-sm')}>
                    <Image src={image} alt={brandName + _id} fill style={{
                        objectFit: 'contain',
                        objectPosition: "center"

                    }} className={cn('rounded')} />
                </CardContent>
                <CardFooter>
                    <div className="w-full flex justify-around">
                        <Avatar className={cn(' object-cover bg-opacity-70')}>
                            <AvatarImage src={SelectLogo.length > 0 ? SelectLogo[0].logo : 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                            <AvatarFallback AvatarFallback > {brandName}</AvatarFallback>
                        </Avatar>
                        <p className='text-xl font-semibold'>Ksh. {price}</p>
                    </div>
                </CardFooter>
            </Card>
        </Link >
    )
}

export default ProductCard