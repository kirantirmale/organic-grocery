import React from 'react'
import Image from "next/image";
export default function Sells() {
    return (
        <>
            <section className='width100  pt-20 pb-20'>
                <section className='width80 flex flex-col justify-center'>
                    <div className='sells flex flex-col gap-4 md:flex-row md:justify-between'>
                        <div className='topsell flex flex-col gap-4'>
                            <h1 className='text-3xl font-bold'>Top Sells</h1>
                            <hr className="border-b-2 border-orange-600 w-20" />


                            <div className="store mt-5 flex flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50">
                                <Image
                                    src="/sels4.png"
                                    alt=""
                                    width={70}
                                    height={90}
                                    className="cursor-pointer"
                                />
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold">Fresh Apple <span className="font-medium">(5 kg)</span></p>
                                    <p><span className="line-through">$25.00</span> $20.00</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className="cursor-pointer"
                                    />

                                    <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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


                            <div className='store mt-5 flex flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50'>
                                <Image
                                    src="/sels3.png"
                                    alt=""
                                    width={70}
                                    height={90}
                                    className=""
                                />
                                <div className=' flex flex-col gap-2' >
                                    <p className='font-bold'>Mix Fruits <span className='font-medium'>(5 kg)</span></p>

                                    <p><span className='line-through'>$25.00</span> $20.00</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                            <div className='store  mt-5 flex flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50'>
                                <Image
                                    src="/sels2.png"
                                    alt=""
                                    width={70}
                                    height={90}
                                    className=""
                                />
                                <div className=' flex flex-col gap-2'>
                                    <p className='font-bold'>Banana<span className='font-medium'>(12 piece)</span></p>

                                    <p><span className='line-through'>$25.00</span> $20.00</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                            <div className='store mt-5 flex flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50'>
                                <Image
                                    src="/sels1.png"
                                    alt=""
                                    width={50}
                                    height={20}
                                    className=" p-3"
                                />
                                <div className=' flex flex-col gap-2'>
                                    <p className='font-bold'>Grapes Juice<span className='font-medium'>(3 Bottle)</span></p>

                                    <p><span className='line-through'>$25.00</span> $20.00</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                            <a href="#" className='text-orange-600 underline'>View All Produds</a>
                        </div>
                        <div className='topadded'>
                            <div className='topsell flex flex-col gap-4'>

                                <h1 className='text-3xl font-bold'>Recently Added</h1>
                                <hr className="border-b-2 border-orange-600 w-20" />


                                <div className='store flex mt-5  gap-4 relative  hover:bg-orange-50'>
                                    <Image
                                        src="/sells5.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold'>Simla Chilli <span className='font-medium'>(1 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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

                                <div className='store flex mt-5 flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50'>
                                    <Image
                                        src="/sells6.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2' >
                                        <p className='font-bold'>Organic Potato<span className='font-medium'>(5 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                                <div className='store flex  mt-5 flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50'>
                                    <Image
                                        src="/sells7.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='font-bold'>Cauliflower<span className='font-medium'>(1 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                                <div className='store flex mt-5 flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50'>
                                    <Image
                                        src="/sells8.png"
                                        alt=""
                                        width={70}
                                        height={20}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='font-bold'>Peas <span className='font-medium'>(1 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                                <a href="#" className=' '>View All Produds</a>
                            </div>
                        </div>
                        <div className='toprated'>
                            <div className='topsell flex flex-col gap-4'>
                                <h1 className='text-3xl font-bold'>Top Rated</h1>
                                <hr className="border-b-2 border-orange-600 w-20" />


                                <div className='store flex  mt-5 gap-4 relative  hover:bg-orange-50'>
                                    <Image
                                        src="/sells9.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold'>Fresh Mango<span className='font-medium'>(1 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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

                                <div className='store flex mt-5 flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50'>
                                    <Image
                                        src="/sells10.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2' >
                                        <p className='font-bold'>Organic Kiwi <span className='font-medium'>(2 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                                <div className='store flex mt-5  flex-col gap-4 md:flex-row md:gap-10 relative hover:bg-orange-50'>
                                    <Image
                                        src="/sells11.png"
                                        alt=""
                                        width={70}
                                        height={90}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='font-bold'>Farm Carrot <span className='font-medium'>(1 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                                <div className='store mt-5 flex  gap-3 relative  hover:bg-orange-50'>
                                    <Image
                                        src="/sells12.png"
                                        alt=""
                                        width={70}
                                        height={20}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='font-bold'>Fresh Radish<span className='font-medium'>(5 piece)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={70}
                                            height={90}
                                            className=""
                                        />
                                        <div className="absolute top-0 -left-0 pr-40 pl-4  h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                                <a href="#" className=''>View All Produds</a>
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
