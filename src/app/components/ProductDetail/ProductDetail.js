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
                <section className='width80 flex lg:flex-row  mo:flex-col md:flex-row  gap-5 pt-20 pb-20'>
                    <div className='width30'>
                        <div className="bg-lime-50 rounded border">
                            <Image
                                src={mainImage}
                                alt="Main"
                                className=" border border-gray-300"
                                width={550}
                                height={90}
                            />
                        </div>
                        <div className="flex flex-col justify-center pt-6 mo:flex-row">
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                                <Image
                                    src="/prod33.png"
                                    alt="Thumbnail 1"
                                    className="w-full cursor-pointer border border-gray-300"
                                    onClick={() => changeImage('/prod33.png')}
                                    width={30}
                                    height={90}
                                />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
                                <Image
                                    src="/prod1.png"
                                    alt="Thumbnail 2"
                                    className="w-full cursor-pointer border border-gray-300"
                                    onClick={() => changeImage('/prod1.png')}
                                    width={20}
                                    height={90}
                                />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
                                <Image
                                    src="/prod33.png"
                                    alt="Thumbnail 3"
                                    className="w-full cursor-pointer border border-gray-300"
                                    onClick={() => changeImage('/prod33.png')}
                                    width={20}
                                    height={90}
                                />
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2">
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


                    <div class='withh70 mo:w-full'>
                        <div class='bg-lime-50 rounded border'>
                            <div class='p-8 flex flex-col gap-2'>
                                <div class="flex justify-between items-center p-2 mo:flex-col lg:flex-row md:flex-row">
                                    <div class="text-left ">
                                        <p> Availability: <span class='text-lime-600 font-bold'>In Stock</span></p>
                                    </div>
                                    <div class="text-right flex flex-row gap-2 mo:flex-col lg:flex-row">
                                        <img
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            class="text-center"
                                        />
                                        ( 10 Review )
                                    </div>
                                </div>
                                <div class='flex flex-col gap-2'>
                                    <h1 class='text-2xl font-bold'>Fresh Yellow Orange </h1>
                                    <p class='text-xl font-bold'><span class="line-through text-base font-normal">$ 10.00</span> $08.00</p>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, words which don't look even slightly believable.There are many.</p>
                                </div>
                                <hr />
                                <div class="flex justify-between items-center p-2 bg-lime-50 mo:flex-col lg:flex-row">

                                    <div class="flex justify-between items-center border p-2 bg-lime-50 mt-2  ">
                                        <label for="quantity" class="mr-2">QTY</label>
                                        <select id="quantity" name="quantity" class="py-2 bg-lime-50 w-20">
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
                                    <div class="flex justify-between items-center border p-2 bg-lime-50 mt-2 ">
                                        <label for="size" class="mr-2">Size</label>
                                        <select id="size" name="size" class="py-2 bg-lime-50 w-20">
                                            <option value="small">Small</option>
                                            <option value="medium" selected>Medium</option>
                                            <option value="large">Large</option>
                                            <option value="xl">XL</option>
                                        </select>
                                    </div>


                                    <div class="flex justify-between items-center border p-2 bg-lime-50 mt-2 sm:flex-col">

                                        <div class="text-center">
                                            <label for="weight-center" class="mr-2">Weight</label>
                                            <select id="weight-center" name="weight" class="py-2 bg-lime-50 w-20">
                                                <option value="1kg">1kg</option>
                                                <option value="2kg">2kg</option>
                                                <option value="3kg">3kg</option>
                                                <option value="4kg">4kg</option>
                                                <option value="5kg">5kg</option>
                                            </select>
                                        </div>

                                    </div>
                                </div>
                                <div class=''>
                                    <div class="flex flex-col gap-5">
                                        <a href='' class="flex mo:m-auto lg:m-0 bg-lime-700 text-center w-36 gap-2 pl-3 pr-3 rounded pt-2 pb-2 ">
                                            <img
                                                src="/shopping.png"
                                                alt=""
                                                width={20}
                                                height={30}
                                            />
                                            <p class="text-white align-middle">Add to Cart</p>
                                        </a>
                                        <p class='text-orange-500'><span class="text-black ">SKU: </span> D2300-2</p>
                                        <p class='text-orange-500'><span class="text-black ">CATEGORIES: </span> CLOTHING, DEAL OF WEEK, WOMEN</p>
                                        <p class='text-orange-500'><span class="text-black ">TAGS: Hot </span>, Trend</p>
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
