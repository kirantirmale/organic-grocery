"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { mainProduct, productsUp } from '@/app/data/Produ';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function FeaturedProduct() {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState();

    const addToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        const updatedSubtotal = updatedCart.reduce((total, item) => total + (+item.price), 0);
        setSubtotal(updatedSubtotal);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        const updatedSubtotal = updatedCart.reduce((total, item) => total + (+item.price), 0);
        setSubtotal(updatedSubtotal);
    };

    return (
        <>
            <section className='width100 pb-20'>
                <section className='width80 sm:flex flex-row gap-5'>
                    <div className='flex flex-col sm:w-1/4 gap-5 '>
                        <div className='border flex flex-col gap-5 p-5 bg-lime-50 '>
                            <h1 className='text-2xl font-bold text-lime-600'>Cart</h1>
                            <hr />
                            <div className="products-up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 h-96 overflow-y-scroll lg:grid-cols-1 xl:grid-cols-1 gap-5">
                                {cart.map((product, index) => (
                                    <div key={index} className="card border cursor-pointer  h-24 border-spacing-3 items-center flex  gap-5 hover:border-lime-500 relative ">
                                        <div className="bg-lime-50 m-1 ">
                                            <Image
                                                src={product.image}
                                                alt={product.alt}
                                                width={60}
                                                height={20}
                                                className='m-auto'
                                            />
                                        </div>

                                        <div className='flex flex-col'>
                                            <h5 className="font-bold text-black">{product.title}</h5>
                                            <p> ${product.price}</p>
                                        </div>

                                        <div className='justify-end'>
                                            <FontAwesomeIcon
                                                icon={faTimes}
                                                className="text-black-500 cursor-pointer "
                                                onClick={() => removeFromCart(index)}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <p className=''>Subtotal:<span className='font-bold'> ${subtotal }</span></p>
                        </div>

                        <div className='border flex flex-col gap-5 p-5 bg-lime-50'>
                            <h1 className='text-2xl font-bold text-lime-600'>Featured Product</h1>
                            <hr />
                            <div className="products-up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-5">
                                {productsUp.map((product, index) => (
                                    <Link href='/ProductDetailPage' key={index} className="card border cursor-pointer border-spacing-3 items-center flex  gap-5 hover:border-lime-500 relative ">
                                        <div className="bg-lime-50 m-1 ">
                                            <Image
                                                src={product.image}
                                                alt={product.alt}
                                                width={60}
                                                height={20}
                                                className='m-auto'
                                            />
                                        </div>

                                        <div className='flex flex-col'>
                                            <Image
                                                src="/ratting.png"
                                                alt=""
                                                width={60}
                                                height={90}
                                                className="text-center"
                                            />
                                            <h5 className="font-bold text-black">{product.title}</h5>
                                            <p> ${product.price}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col sm:w-3/4'>
                        <div className="flex justify-between items-center  border p-2 bg-lime-50">
                            <div className="text-left">
                                Showing Products 1-12 Of 199 Result
                            </div>
                            <div className="text-right">
                                <select
                                    id="sort"
                                    name="sort"
                                    className="py-2 bg-lime-50 w-20"
                                    defaultValue="price-low-to-high"
                                >
                                    <option value="default">Sort by</option>
                                    <option value="price-low-to-high">$ Low </option>
                                    <option value="price-high-to-low">$ High</option>
                                    <option value="newest">New</option>
                                </select>
                            </div>
                        </div>

                        <div className="products flex flex-col justify-center mt-10 gap-10">
                            <div className="products-up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16">
                                {mainProduct.map((product, index) => (
                                    <div key={index} className="card border cursor-pointer border-spacing-3 text-center flex flex-col gap-5 hover:border-lime-500 relative ">
                                        <div className="bg-lime-50 m-1 pt-4 pb-4">
                                            <Image
                                                src={product.image}
                                                alt={product.alt}
                                                width={180}
                                                height={90}
                                                className='m-auto'
                                            />
                                        </div>
                                        <h5 className="font-bold text-black">{product.title}</h5>
                                        <p><span className="line-through">${product.originalPrice}</span> ${product.price}</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className="text-center m-auto pb-5"
                                        />
                                        <div
                                            className="absolute top-0 pt-96 mt-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                                            onClick={() => addToCart(product)}
                                        >
                                            <div className="flex bg-lime-600 text-center w-32 gap-2 pl-2 rounded pt-1 pb-1">
                                                <Image
                                                    src="/shopping.png"
                                                    alt=""
                                                    width={20}
                                                    height={30}
                                                />
                                                <p className="text-white align-middle">Add to Cart</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="flex justify-end pt-10 ">
                    <div className="flex space-x-2 border rounded p-1 bg-lime-50 ">
                        <a
                            href=""
                            className="px-3 py-1 active:bg-lime-600  text-gray-700 rounded-md hover:bg-lime-600"
                        >
                            1
                        </a>
                        <a
                            href=""
                            className="px-3 py-1 active:bg-lime-600 text-gray-700 rounded-md hover:bg-lime-600"
                        >
                            2
                        </a>
                        <a
                            href=""
                            className="px-3 py-1 active:bg-lime-600 text-gray-700 rounded-md hover:bg-lime-600"
                        >
                            3
                        </a>
                        <a
                            href=""
                            className="px-3 py-1 active:bg-lime-600 text-gray-700 rounded-md hover:bg-lime-600"
                        >
                            4
                        </a>
                        <a
                            href=""
                            className="px-3 py-1 active:bg-lime-600 text-gray-700 rounded-md hover:bg-lime-600"
                        >
                            Next
                        </a>
                    </div>
                </div>
            </section>

        </>
    )
}
