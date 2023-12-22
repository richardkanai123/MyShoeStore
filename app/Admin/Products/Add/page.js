'use client'
import { Button } from '@/components/ui/button';
import { useEdgeStore } from '@/lib/edgestore';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AddNewProductPage = () => {
    // Router
    const Router = useRouter()
    //states
    const [selectedColor, setSelectedColor] = useState('');
    const [colorsArray, setColorsArray] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    const [sizesArray, setSizesArray] = useState([]);
    const [shoeName, setShoeName] = useState('');
    const [shoeBrand, setShoeBrand] = useState('');
    const [shoeCategory, setShoeCategory] = useState('');
    const [shoePrice, setShoePrice] = useState(0);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [stock, setShoeStock] = useState(1);
    const [shoeDescprition, setShoeDescprition] = useState('');
    const [shoeImage, setShoeImage] = useState();
    const [shoeImageUrl, setShoeImageUrl] = useState({
        url: '',
        thumbnail: ''
    });

    // edgestore
    const { edgestore } = useEdgeStore()

    // constants
    const sizes = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
    const colors = ['Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 'Brown', 'Gray', 'Silver', 'Gold'];
    const shoeBrands = [
        "Nike",
        "Adidas",
        "Puma",
        "Reebok",
        "Converse",
        "Vans",
        "New Balance",
        "Under Armour",
        "ASICS",
        "Skechers",
        "Jordan",
        "Timberland",
        "Clarks",
        "Dr. Martens",
        "Gucci",
        "Balenciaga",
        "Prada",
        "Fila",
        "Salomon",
        "Brooks"
    ];

    const shoeTypes = [
        "Sneakers",
        "Boots",
        "Heels",
        "Flats",
        "Loafers",
        "Oxfords",
        "Sandals",
        "Slippers",
        "Athletic Shoes",
        "Espadrilles",
        "Mules",
        "Clogs",
        "Wedges",
        "Platform Shoes",
        "Flip Flops"
    ];


    // functions for state and events manipulation
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };
    const handleAddColor = () => {
        if (selectedColor && !colorsArray.includes(selectedColor)) {
            setColorsArray([...colorsArray, selectedColor]);
        }
    };
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };
    const handleAddSize = () => {
        if (selectedSize && !sizesArray.includes(selectedSize)) {
            setSizesArray([...sizesArray, selectedSize]);
        }
    };

    const handleRemoveColor = (index) => {
        const updatedColors = [...colorsArray];
        updatedColors.splice(index, 1);
        setColorsArray(updatedColors);
    };

    const handleRemoveSize = (index) => {
        const updatedSizes = [...sizesArray];
        updatedSizes.splice(index, 1);
        setSizesArray(updatedSizes);
    };


    const AddNewShoe = async () => {
        if (shoeImage) {
            const res = await edgestore.publicFiles.upload({
                file: shoeImage,
                onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    setUploadProgress(() => (progress))
                    if (progress === 100) {
                        toast.done('Image Uploaded')
                    }
                },
            });
            // Add shoe to database
            try {
                const shoeRes = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/shoes`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        image: res.url,
                        shoeName: shoeName,
                        price: shoePrice,
                        brandName: shoeBrand,
                        sizes: sizesArray,
                        colors: colorsArray,
                        category: shoeCategory,
                        stock: stock,
                        description: shoeDescprition
                    })
                })
                Router.replace('/Admin/Products/Add/Success')
            } catch (error) {
                toast.error(error.message)
            }

        }
    }




    return (
        <div className="container flex flex-col items-center align-middle justify-center gap-2 pt-4">

            <div className="w-full flex items-center flex-col text-left">
                <label className="w-full text-base" htmlFor="shoeImage">Shoe Image</label>
                <input type='file'
                    onChange={
                        (e) => {
                            setShoeImage(e.target.files?.[0]);
                        }
                    }
                    accept='image' max={50000} id='shoeImage' name='shoeImage'
                    className="w-full bg-muted-foreground p-4 ring-0 outline-0 rounded text-base font-semibold  self-start max-w-sm" />

                <div className="w-full mt-3 mb-2 mx-auto bg-muted h-5 rounded-lg ease-linear duration-100 transition-all">
                    <div style={{
                        width: `${uploadProgress}%`
                    }} className="bg-lime-800 h-full rounded-lg animate-in delay-75 duration-75 ">
                        {uploadProgress === 100 && <p className='text-center text-xs font-bold  text-white'>Uploaded✅</p>}
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center flex-col text-left">
                <label htmlFor="shoeName" className="w-full text-base">Shoe Name</label>
                <input value={shoeName} onChange={(e) => setShoeName(e.target.value)} type="text" className="w-full bg-muted-foreground px-2 py-1 ring-0 outline-0 rounded text-base font-semibold  self-start max-w-sm" id="shoeName" name="shoeName" />
                <p className="text-sm text-red-300 mt-2"></p>
            </div>
            <div className="w-full flex items-center flex-col text-left">
                <label htmlFor="brandName" className="w-full text-base">Brand</label>
                <select id="brandName" value={shoeBrand} onChange={(e) => setShoeBrand(e.target.value)} className="w-full bg-muted-foreground px-2 py-1 ring-0 outline-0 rounded text-base font-semibold  self-start max-w-sm" >
                    <option value="select">Select</option>
                    {
                        shoeBrands.map((brand) => <option id={brand} value={brand} name="brandName" key={brand}>{brand}</option>)
                    }
                </select>

            </div>
            <div className="w-full flex items-center flex-col text-left">
                <label htmlFor="shoeCategory" className="w-full text-base">Category</label>
                <select id="shoeCategory" value={shoeCategory} onChange={(e) => setShoeCategory(e.target.value)} name="shoeCategory" className="w-full bg-muted-foreground px-2 py-1 ring-0 outline-0 rounded text-base font-semibold  self-start max-w-sm" >
                    <option value="select">Select</option>
                    {
                        shoeTypes.map((type) => <option id={type} value={type} name="shoeCategory" key={type}>{type}</option>)
                    }
                </select>
            </div>

            <div className="w-full flex items-center flex-col text-left">
                <label htmlFor="price" className="w-full text-base">Shoe Price</label>
                <input type="number" min={1} value={shoePrice} onChange={(e) => setShoePrice(e.target.valueAsNumber)} className="w-full bg-muted-foreground px-2 py-1 ring-0 outline-0 rounded text-base font-semibold  self-start max-w-sm" id="price" name="price" />
                <p className="text-sm text-red-300 mt-2"></p>
            </div>

            <div className="w-full flex items-center flex-col text-left">
                <label htmlFor="stock" className="w-full text-base">Stock</label>
                <input type="number" min={1} value={stock} onChange={(e) => setShoeStock(e.target.valueAsNumber)} className="w-full bg-muted-foreground px-2 py-1 ring-0 outline-0 rounded text-base font-semibold  self-start max-w-sm" id="stock" name="stock" />
                <p className="text-sm text-red-300 mt-2"></p>
            </div>

            <div className="w-full flex items-center flex-col text-left mt-2">
                <p className='w-full text-base'>Select Sizes:</p>
                <section className='w-full items-center flex flex-wrap gap-1'>
                    {sizes.map((size) => (
                        <label key={size} className=' flex flex-wrap p-1 items-center '>
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
                    <ul className='w-fit flex flex-wrap gap-1 font-normal bg-muted p-2 rounded'>
                        {sizesArray.map((item, index) => (
                            <li onClick={() => handleRemoveSize(index)} className='p-2  hover:opacity-75 cursor-grab delay-150 rounded bg-opacity-90 bg-zinc-300 dark:bg-sky-800 animate-in fade-in-25 ' key={index}>{item}</li>
                        ))}
                    </ul>
                    <Button disabled={sizesArray.length === 0} className={cn(' bg-destructive text-base p-3 mt-2')} onClick={() => setSizesArray([])}>
                        Reset Sizes
                    </Button>
                </div>
            </div>

            <div className="w-full flex items-center flex-col text-left mt-2">
                <p className='w-full text-base'>Select Colors:</p>
                <section className='w-full items-center flex flex-wrap gap-1'>
                    {colors.map((color) => (
                        <label key={color} className=' flex flex-wrap p-1 items-center '>
                            <input
                                className='bg-foreground'
                                type="radio"
                                name="color"
                                value={color}
                                checked={selectedColor === color}
                                onChange={handleColorChange}
                            />
                            {color}
                        </label>
                    ))}
                    <Button className={cn('bg-primary text-base p-3')} onClick={handleAddColor}>Add Color</Button>
                </section>


                <div className='w-full text-base'>
                    <p className='text-base font-medium'>Selected Colors:</p>
                    <ul className='w-fit flex flex-wrap gap-1 font-normal bg-muted p-2 rounded'>
                        {colorsArray.map((item, index) => (
                            <li onClick={() => handleRemoveColor(index)} className='p-2 cursor-grab rounded bg-opacity-90 bg-zinc-300 hover:opacity-75  dark:bg-sky-800 delay-150  animate-out fade-out' key={index}>{item}</li>
                        ))}
                    </ul>
                    <Button disabled={colorsArray.length === 0} className={cn(' bg-destructive text-base p-3 mt-2')} onClick={() => setColorsArray([])}>
                        Reset Colors
                    </Button>
                </div>
            </div>


            <div className="w-full flex items-center flex-col text-left">
                <label htmlFor="description" className="w-full text-base">Shoe description</label>
                <textarea value={shoeDescprition} onChange={(e) => setShoeDescprition(e.target.value)} rows={10} placeholder='Enter shoe description' type="text" className="w-full bg-muted-foreground px-2 py-1 ring-0 outline-0  rounded text-base font-semibold  self-start" id="description" name="description" />
                <p className="text-sm text-red-300 mt-2"></p>
            </div>


            <Button onClick={AddNewShoe} className={cn('w-full max-w-xs font-bold text-lg mt-2 mb-6')}>Add Shoe</Button>

        </div>
    )
}

export default AddNewProductPage