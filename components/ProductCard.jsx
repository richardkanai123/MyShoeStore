'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { cn } from '@/lib/utils'
import { Logos } from '@/logos'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Image from 'next/image'
import { Button } from './ui/button'
const ProductCard = ({ Shoe }) => {
    const { brandName, cartegory, price, sizes, colors, imageURL, shoeId } = Shoe

    const SelectLogo = Logos.filter((logo) => logo.brand === brandName)
    console.log();

    return (
        <Card id={shoeId} className={cn('w-full min-w-[90vw] cursor-pointer hover:opacity-80 hover:shadow-md md:min-w-[320px]')}>
            <CardHeader>
                <CardTitle>{brandName}</CardTitle>
                <CardDescription>Shoe Description goes here</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full flex items-center justify-center align-middle">
                    <Image src={imageURL} alt={brandName + shoeId} width={300} height={150} className={cn('rounded')} />
                </div>
                <div className="flex align-middle justify-around items-center gap-1 mt-2">
                    {sizes.map((size) => (
                        <Button size="Icon" className={cn('p-1  text-base hover:opacity-80')} key={size}>{size}</Button>
                    ))}
                </div>
                <div className="flex align-middle justify-around items-center gap-1 mt-4">
                    {colors.map((item) => (
                        <button key={item} style={{
                            backgroundColor: item,

                        }} className='p-2 text-background rounded-lg'  >{item}</button>
                    ))}
                </div>
            </CardContent>
            <CardFooter>

                <div className="w-full flex justify-around">
                    <Avatar className={cn('w-6 h-6 object-cover bg-opacity-70')}>
                        <AvatarImage src={SelectLogo[0].logo} />
                        <AvatarFallback>{brandName}</AvatarFallback>
                    </Avatar>

                    <p>Ksh. {price}</p>
                </div>
            </CardFooter>
        </Card>

    )
}

export default ProductCard