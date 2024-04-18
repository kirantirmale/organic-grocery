"use client"
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function ProductDetail() {
    const [mainImage, setMainImage] = useState('/prod33.png');

    const changeImage = (newImage) => {
        setMainImage(newImage);
    };
    return (
        <>
            <section className='width100'>
                <section className='width80 flex flex-row justify-center gap-5 pt-20 pb-20'>
                    <div className='withh30'>
                        <div className="bg-lime-50 rounded border">
                            <Image
                                src={mainImage}
                                alt="Main"
                                className="w-full border border-gray-300"
                                width={180}
                                height={90}
                            />
                        </div>
                        <div className="flex flex-wrap justify-center pt-6">
                            <div className="w-full md:w-1/3 lg:w-1/4 p-2">
                                <Image
                                    src="/prod33.png"
                                    alt="Thumbnail 1"
                                    className="w-full cursor-pointer border border-gray-300"
                                    onClick={() => changeImage('/prod33.png')}
                                    width={20}
                                    height={90}
                                />
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                                <Image
                                    src="/prod1.png"
                                    alt="Thumbnail 2"
                                    className="w-full cursor-pointer border border-gray-300"
                                    onClick={() => changeImage('/prod1.png')}
                                    width={20}
                                    height={90}
                                />
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                                <Image
                                    src="/prod33.png"
                                    alt="Thumbnail 3"
                                    className="w-full cursor-pointer border border-gray-300"
                                    onClick={() => changeImage('/prod33.png')}
                                    width={20}
                                    height={90}
                                />
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/4 p-2">
                                <Image
                                    src="/prod1.png"
                                    alt="Thumbnail 4"
                                    className="w-full cursor-pointer border border-gray-300"
                                    onClick={() => changeImage('/prod1.png')}
                                    width={50}
                                    height={90}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='withh70'>
                        <div className='bg-lime-50 rounded border'>
                            <div className='p-8 flex flex-col gap-2 '>
                                <div className="flex justify-between items-center   p-2 ">
                                    <div className="text-left">
                                        <p> Availability: <span className='text-lime-600 font-bold'>In Stock</span></p>
                                    </div>
                                    <div className="text-right flex flex-row  gap-2">
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className="text-center"
                                        />
                                        ( 10 Review )
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-2xl font-bold'>Fresh Yellow Orange </h1>
                                    <p className='text-xl font-bold'><span className="line-through text-base font-normal">$ 10.00</span> $08.00</p>
                                    <p className=''>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, words which don't look even slightly believable.There are many.</p>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center  p-2 bg-lime-50">

                                    <div className="flex justify-between items-center border p-2 bg-lime-50 mt-2">
                                        <label for="quantity" className="mr-2">QTY</label>
                                        <select id="quantity" name="quantity" className="py-2 bg-lime-50 w-20">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-between items-center border p-2 bg-lime-50 mt-2">
                                        <label for="size" className="mr-2">Size</label>
                                        <select id="size" name="size" className="py-2 bg-lime-50 w-20">
                                            <option value="small">Small</option>
                                            <option value="medium" selected>Medium</option>
                                            <option value="large">Large</option>
                                            <option value="xl">XL</option>
                                        </select>
                                    </div>


                                    <div className="flex justify-between items-center border p-2 bg-lime-50 mt-2">

                                        <div className="text-center">
                                            <label for="weight-center" className="mr-2">Weight</label>
                                            <select id="weight-center" name="weight" className="py-2 bg-lime-50 w-20">
                                                <option value="1kg">1kg</option>
                                                <option value="2kg">2kg</option>
                                                <option value="3kg">3kg</option>
                                                <option value="4kg">4kg</option>
                                                <option value="5kg">5kg</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div className=''>
                                    <div className="flex flex-col gap-5">
                                        <Link href='' className="flex bg-lime-700 text-center w-36 gap-2 pl-3 pr-3 rounded pt-2 pb-2 ">
                                            <Image
                                                src="/shopping.png"
                                                alt=""
                                                width={20}
                                                height={30}
                                            />
                                            <p className="text-white align-middle">Add to Cart</p>
                                        </Link>
                                        <p className=' text-orange-500'><span className="text-black ">SKU: </span> D2300-2</p>
                                        <p className=' text-orange-500'><span className="text-black ">CATEGORIES: </span> CLOTHING, DEAL OF WEEK, WOMEN</p>
                                        <p className=' text-orange-500'><span className="text-black ">TAGS: Hot </span>, Trend</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
