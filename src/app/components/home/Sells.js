import React from 'react'
import Image from "next/image";
import { recentlyAddedProducts, topRatedProducts, topSellingProducts } from '../../data/Sell';
export default function Sells() {
    return (
        <>
            <section className='width100  pt-20 pb-20'>
                <section className='width80 flex flex-col justify-center'>
                    <div className='sells flex flex-col gap-4 md:flex-row md:justify-between'>

                        <div className='topsell flex flex-col gap-4'>
                            <h1 className='text-3xl font-bold'>Top Sells</h1>
                            <hr className="border-b-2 border-orange-600 w-20" />

                            {topSellingProducts.map(product => (
                                <div key={product.id} className="store mt-5 cursor-pointer flex flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50">
                                    <Image
                                        src={product.image}
                                        alt=""
                                        width={70}
                                        height={90}
                                        className="cursor-pointer"
                                    />
                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold">{product.name} <span className="font-medium">{product.quantity}</span></p>
                                        <p><span className="line-through">${product.oldPrice.toFixed(2)}</span> ${product.newPrice.toFixed(2)}</p>
                                        <Image
                                            src={product.ratingImage}
                                            alt=""
                                            width={70}
                                            height={90}
                                            className="cursor-pointer"
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4 h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <div className="bg-orange-500 text-white px-2 py-1 rounded">
                                                <Image
                                                    src="/shopping.png"
                                                    alt="Add to Cart"
                                                    width={30}
                                                    height={30}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                           <a href="#" className='mt-5 hover:text-orange-500  hover:border-orange-500 hover:underline'>View All Products</a>


                        </div>



                        <div className='topadded'>
                            <div className='topsell flex flex-col gap-4'>
                                <h1 className='text-3xl font-bold'>Recently Added</h1>
                                <hr className="border-b-2 border-orange-600 w-20" />

                                {recentlyAddedProducts.map(product => (
                                    <div key={product.id} className="store cursor-pointer flex mt-5 gap-4 relative hover:bg-orange-50">
                                        <Image
                                            src={product.image}
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold">{product.name} <span className="font-medium">{product.quantity}</span></p>
                                            <p><span className="line-through">${product.oldPrice.toFixed(2)}</span> ${product.newPrice.toFixed(2)}</p>
                                            <Image
                                                src={product.ratingImage}
                                                alt=""
                                                width={70}
                                                height={90}
                                                className=""
                                            />
                                            <div className="absolute top-0 -left-0 pr-40 pl-4 h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-orange-500 text-white px-2 py-1 rounded">
                                                    <Image
                                                        src="/shopping.png"
                                                        alt="Add to Cart"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <a href="#" className='mt-5 hover:text-orange-500  hover:border-orange-500 hover:underline'>View All Products</a>
                            </div>
                        </div>



                        <div className='toprated'>
                            <div className='topsell flex flex-col gap-4'>
                                <h1 className='text-3xl font-bold'>Top Rated</h1>
                                <hr className="border-b-2 border-orange-600 w-20" />

                                {topRatedProducts.map(product => (
                                    <div key={product.id} className="store cursor-pointer flex mt-5 gap-4 relative hover:bg-orange-50">
                                        <Image
                                            src={product.image}
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold">{product.name} <span className="font-medium">{product.quantity}</span></p>
                                            <p><span className="line-through">${product.oldPrice.toFixed(2)}</span> ${product.newPrice.toFixed(2)}</p>
                                            <Image
                                                src={product.ratingImage}
                                                alt=""
                                                width={70}
                                                height={90}
                                                className=""
                                            />
                                            <div className="absolute top-0 -left-0 pr-40 pl-4 h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-orange-500 text-white px-2 py-1 rounded">
                                                    <Image
                                                        src="/shopping.png"
                                                        alt="Add to Cart"
                                                        width={30}
                                                        height={30}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <a href="#" className='mt-5 hover:text-orange-500  hover:border-orange-500 hover:underline'>View All Products</a>
                            </div>
                        </div>



                        <div className='over text-center '>
                            <div className='pl-10 pr-10 flex flex-col gap-4  ' >

                                <h1 className='font-bold text-2xl text-white pt-5'>Free Delivery Over $50.00</h1>
                                <p className='text-white text-xl'>Shop $50.00+ Producrs and Get
                                    <br />
                                    Free Delivery Anywhere</p>
                                <button className=" p-3 rounded-md bg-white text-orange-600 font-bold  m-auto">Shop Now</button>
                                <Image
                                    src="/man.png"
                                    alt=""
                                    width={340}
                                    height={90}
                                    className="mt-14"
                                />
                            </div>
                        </div>
                        
                    </div>
                </section>
            </section>
        </>
    )
}
