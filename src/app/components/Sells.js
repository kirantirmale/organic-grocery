import React from 'react'
import Image from "next/image";
export default function Sells() {
    return (
        <>
            <section className='width100 '>
                <section className='width80 flex flex-col justify-center mt-20'>
                    <div className='sells flex justify-between'>
                        <div className='topsell flex flex-col gap-5'>
                            <h1 className='text-3xl font-bold'>Top Sells</h1>
                            <hr className='text-orange-600 w-20  bg-orange-600' />

                            <div className='store flex   gap-4'>
                                <Image
                                    src="/sels4.png"
                                    alt=""
                                    width={60}
                                    height={90}
                                    className=""
                                />
                                <div className='flex flex-col gap-2'>
                                    <p className='font-bold'>Fresh Apple <span className='font-medium'>(5 kg)</span></p>

                                    <p><span className='line-through'>$25.00</span> $20.00</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />

                                </div>
                            </div>

                            <div className='store flex  gap-4'>
                                <Image
                                    src="/sels3.png"
                                    alt=""
                                    width={60}
                                    height={90}
                                    className=""
                                />
                                <div className=' flex flex-col gap-2' >
                                    <p className='font-bold'>Mix Fruits <span className='font-medium'>(5 kg)</span></p>

                                    <p><span className='line-through'>$25.00</span> $20.00</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />

                                </div>
                            </div>
                            <div className='store flex  gap-4'>
                                <Image
                                    src="/sels2.png"
                                    alt=""
                                    width={60}
                                    height={90}
                                    className=""
                                />
                                <div className=' flex flex-col gap-2'>
                                    <p className='font-bold'>Banana<span className='font-medium'>(12 piece)</span></p>

                                    <p><span className='line-through'>$25.00</span> $20.00</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />

                                </div>
                            </div>
                            <div className='store flex  gap-4'>
                                <Image
                                    src="/sels1.png"
                                    alt=""
                                    width={50}
                                    height={20}
                                    className=""
                                />
                                <div className=' flex flex-col gap-2'>
                                    <p className='font-bold'>Grapes Juice<span className='font-medium'>(3 Bottle)</span></p>

                                    <p><span className='line-through'>$25.00</span> $20.00</p>
                                    <Image
                                        src="/ratting.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />

                                </div>

                            </div>
                            <a href="#" className='text-orange-600 underline'>View All Produds</a>
                        </div>
                        <div className='topadded'>
                            <div className='topsell flex flex-col gap-5'>
                                <h1 className='text-3xl font-bold'>Recently Added</h1>
                                <hr className='text-orange-600 w-20  bg-orange-600' />

                                <div className='store flex   gap-4'>
                                    <Image
                                        src="/sels4.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold'>Fresh Apple <span className='font-medium'>(5 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className=""
                                        />

                                    </div>
                                </div>

                                <div className='store flex  gap-4'>
                                    <Image
                                        src="/sels3.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2' >
                                        <p className='font-bold'>Mix Fruits <span className='font-medium'>(5 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className=""
                                        />

                                    </div>
                                </div>
                                <div className='store flex  gap-4'>
                                    <Image
                                        src="/sels2.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='font-bold'>Banana<span className='font-medium'>(12 piece)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className=""
                                        />

                                    </div>
                                </div>
                                <div className='store flex  gap-4'>
                                    <Image
                                        src="/sels1.png"
                                        alt=""
                                        width={50}
                                        height={20}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='font-bold'>Grapes Juice<span className='font-medium'>(3 Bottle)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className=""
                                        />

                                    </div>

                                </div>
                                <a href="#" className=' '>View All Produds</a>
                            </div>
                        </div>
                        <div className='toprated'>
                            <div className='topsell flex flex-col gap-5'>
                                <h1 className='text-3xl font-bold'>Top Rated</h1>
                                <hr className='text-orange-600 w-20  bg-orange-600' />

                                <div className='store flex   gap-4'>
                                    <Image
                                        src="/sels4.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />
                                    <div className='flex flex-col gap-2'>
                                        <p className='font-bold'>Fresh Apple <span className='font-medium'>(5 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className=""
                                        />

                                    </div>
                                </div>

                                <div className='store flex  gap-4'>
                                    <Image
                                        src="/sels3.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2' >
                                        <p className='font-bold'>Mix Fruits <span className='font-medium'>(5 kg)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className=""
                                        />

                                    </div>
                                </div>
                                <div className='store flex  gap-4'>
                                    <Image
                                        src="/sels2.png"
                                        alt=""
                                        width={60}
                                        height={90}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='font-bold'>Banana<span className='font-medium'>(12 piece)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className=""
                                        />

                                    </div>
                                </div>
                                <div className='store flex  gap-4'>
                                    <Image
                                        src="/sels1.png"
                                        alt=""
                                        width={50}
                                        height={20}
                                        className=""
                                    />
                                    <div className=' flex flex-col gap-2'>
                                        <p className='font-bold'>Grapes Juice<span className='font-medium'>(3 Bottle)</span></p>

                                        <p><span className='line-through'>$25.00</span> $20.00</p>
                                        <Image
                                            src="/ratting.png"
                                            alt=""
                                            width={60}
                                            height={90}
                                            className=""
                                        />

                                    </div>

                                </div>
                                <a href="#" className=''>View All Produds</a>
                            </div>
                        </div>
                        <div className='over'>
                            <Image
                                src="/Offer.png"
                                alt=""
                                width={340}
                                height={90}
                                className=""
                            />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
