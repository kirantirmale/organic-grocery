import React from 'react'
import Image from "next/image";
export default function Products() {
    return (
        <>
            <section className="width100 justify-center flex flex-col pro pt-20 pb-20">
                <section className="width80 flex flex-col justify-center">

                    <div className='text-center flex flex-col gap-5'>
                        <p className="bgcolor text-white p-1 w-48 text-center rounded-md m-auto">Awesome Products</p>
                        <h1 className='text-orange-600 font-bold text-3xl'>Featured Products</h1>
                        <div className='flex m-auto gap-5'>
                            <button className="btn4 p-2 rounded-sm bg-orange-500 text-white w-28">All Products</button>
                            <button className="btn4 p-2 rounded-sm bg-orange-100 text-black w-28">Best Sellers</button>
                            <button className="btn4 p-2 rounded-sm bg-orange-100 text-black w-28">New Arrivals</button>
                            <button className="btn4 p-2rounded-sm bg-orange-100 text-black w-28">Top Rated</button>
                        </div>
                    </div>

                    <div className="products flex flex-col  justify-center mt-20 gap-10">
                        <div className="products-up flex  justify-center gap-28">
                            <div className="card border border-spacing-3 text-center flex flex-col gap-3  hover:border-green-500 relative">
                                <div className="bg-lime-50 m-1 ">
                                    <Image
                                        src="/pro1.png"
                                        alt=""
                                        width={220}
                                        height={90}
                                    />
                                </div>
                                <h5 className="font-bold text-orange-500">Fresh Tomato</h5>
                                <p><span className="line-through">$10.00</span> $05.00</p>
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

                            <div className='card border border-spacing-3 text-center flex flex-col gap-2 hover:border-green-500 relative'>
                                <div className="bg-lime-50 m-1 ">

                                    <Image
                                        src="/pro2.png"
                                        alt=""
                                        width={220}
                                        height={90}

                                    />
                                </div>
                                <h5 className="font-bold">Organic Cabbage</h5>
                                <p><span className='line-through'>$12.00</span> $07.00</p>
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
                            <div className='card border border-spacing-3 text-center flex flex-col gap-2 hover:border-green-500 relative'>
                                <div className="bg-lime-50 m-1 ">

                                    <Image
                                        src="/pro3.png"
                                        alt=""
                                        width={220}
                                        height={90}

                                    />
                                </div>
                                <h5 className="font-bold">Yellow Orange</h5>
                                <p><span className='line-through'>$15.00</span> $15.00</p>
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
                            <div className='card border border-spacing-3 text-center flex flex-col gap-2 hover:border-green-500 relative'>
                                <div className="bg-lime-50 m-1 ">

                                    <Image
                                        src="/pro4.png"
                                        alt=""
                                        width={220}
                                        height={90}

                                    />
                                </div>
                                <h5 className="font-bold">Broccoli Sliced Mix</h5>
                                <p><span className='line-through'>$10.00</span> $07.00</p>
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


                        </div>
                        <div className="products-down flex justify-center gap-28">

                            <div className='card border border-spacing-3 text-center flex flex-col gap-2 pb-2 hover:border-green-500 relative'>
                                <div className="bg-lime-50 m-1 ">

                                    <Image
                                        src="/pro5.png"
                                        alt=""
                                        width={220}
                                        height={90}

                                    />
                                </div>
                                <h5 className="font-bold">Stoberry 819525</h5>
                                <p><span className='line-through'>$25.00</span> $20.00</p>
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
                            <div className='card border border-spacing-3 text-center flex flex-col gap-2 pb-2 hover:border-green-500 relative'>
                                <div className="bg-lime-50 m-1 ">

                                    <Image
                                        src="/pro6.png"
                                        alt=""
                                        width={220}
                                        height={90}

                                    />
                                </div>
                                <h5 className="font-bold">Organic Carrot</h5>
                                <p><span className='line-through'>$10.00</span> $07.00</p>
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
                            <div className='card border border-spacing-3 text-center flex flex-col gap-2 pb-2 hover:border-green-500 relative'>
                                <div className="bg-lime-50 m-1 ">

                                    <Image
                                        src="/pro7.png"
                                        alt=""
                                        width={220}
                                        height={90}

                                    />
                                </div>
                                <h5 className="font-bold">Organic Kiwi</h5>
                                <p><span className='line-through'>$16.00</span> $15.00</p>
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
                            <div className='card border border-spacing-3 text-center flex flex-col gap-2 pb-2 hover:border-green-500 relative'>
                                <div className="bg-lime-50 m-1 ">

                                    <Image
                                        src="/pro8.png"
                                        alt=""
                                        width={220}
                                        height={90}

                                    />
                                </div>
                                <h5 className="font-bold">Sweet Mango</h5>
                                <p><span className='line-through'>$30.00</span> $25.00</p>
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
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
