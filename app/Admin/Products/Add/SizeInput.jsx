'use client'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const SizeInput = () => {
    const sizes = ['32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'];

    const [selectedSize, setSelectedSize] = useState('');
    const [sizesArray, setSizesArray] = useState([]);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleAddSize = () => {
        if (selectedSize && !sizesArray.includes(selectedSize)) {
            setSizesArray([...sizesArray, selectedSize]);
        }
    };

    return (
        <div className="w-full flex items-center flex-col text-left">
            <p className='w-full text-base'>Select Size:</p>
            <section className='w-full items-center flex gap-1'>
                {sizes.map((size) => (
                    <label key={size} className='p-1 flex items-center '>
                        <input
                            className='bg-foreground'
                            type="radio"
                            name="size"
                            value={size}
                            checked={selectedSize === size}
                            onChange={handleSizeChange}
                        />
                        {size}
                    </label>
                ))}
                <Button className={cn('bg-primary text-base p-3')} onClick={handleAddSize}>Add Size</Button>
            </section>


            <div className='w-full text-base'>
                <p className='text-base font-medium'>Selected Sizes:</p>
                <ul className='w-full flex gap-1 font-normal'>
                    {sizesArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <Button disabled={sizesArray.length === 0} className={cn(' bg-destructive text-base p-3 mt-2')} onClick={() => setSizesArray([])}>Reset Sizes</Button>

            </div>
        </div>
    );
};

export default SizeInput;
