import React from 'react'
import Image from "next/image";
import { productsDown } from '../../data/Produ';
export default function Savers() {
    return (
        <>
            <section className="width100 justify-center flex flex-col pro pt-20 pb-20">
                <section className="width80">

                    <div className='text-center flex flex-col gap-5 '>
                        <p className="bgcolor text-white p-1 w-48 text-center rounded-md m-auto">Awesome Products</p>
                        <h1 className='text-orange-600 font-bold text-3xl'>Top Savers Today</h1>
                        <div className=' m-auto gap-5  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  sm:grid-cols-3'>
                            <button className="btn4 p-2 transition rounded-sm bg-orange-100 text-black hover:bg-orange-500 hover:text-white w-28">All Products</button>
                            <button className="btn4 p-2 rounded-sm bg-orange-100 text-black hover:bg-orange-500  hover:text-white w-28">Best Sellers</button>
                            <button className="btn4 p-2 rounded-sm bg-orange-100 text-black hover:bg-orange-500   hover:text-white w-28">New Arrivals</button>
                            <button className="btn4 p-2 rounded-sm bg-orange-100 text-black hover:bg-orange-500  hover:text-white w-28">Top Rated</button>
                        </div>

                    </div>

                    <div className="products flex flex-col md:flex-row justify-center mt-8 md:mt-20 gap-10">

                        {/* <div className="products-up flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-8 md:gap-28">
                            {productsUp.map((product, index) => (
                                <div key={index} className="card border cursor-pointer border-spacing-3 text-center flex flex-col gap-3 hover:border-orange-500 relative">
                                    <div className="bg-lime-50 m-1">
                                        <Image
                                            src={product.image}
                                            alt={product.alt}
                                            width={220}
                                            height={90}
                                        />
                                    </div>
                                    <h5 className="font-bold text-orange-500">{product.title}</h5>
                                    <p><span className="line-through">${product.originalPrice}</span> ${product.price}</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className="text-center m-auto pb-5"
                                    />
                                    <div className="absolute top-0 pt-80 mt-1 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex bg-orange-500 text-center w-32 gap-2 pl-2 rounded pt-1 pb-1">
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
                        </div> */}


                        <div className="products-down  flex-wrap md:flex-nowrap justify-center md:justify-start gap-8 md:gap-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                            {productsDown.map((product, index) => (
                                <div key={index} className="card border cursor-pointer border-spacing-3 text-center flex flex-col gap-3 hover:border-orange-500 relative">
                                    <div className="bg-lime-50 m-1">
                                        <Image
                                            src={product.image}
                                            alt={product.alt}
                                            width={220}
                                            height={90}
                                            className='mo:m-auto'
                                        />
                                    </div>
                                    <h5 className="font-bold">{product.title}</h5>
                                    <p><span className="line-through">${product.originalPrice}</span> ${product.price}</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className="text-center m-auto"
                                    />
                                    <div className="absolute top-0 pt-80 mt-1 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex bg-orange-500 text-center w-32 gap-2 pl-2 rounded pt-1 pb-1">
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



                </section>
            </section>
        </>
    )
}
