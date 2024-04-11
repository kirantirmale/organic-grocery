import React from 'react'
import Image from "next/image";

export default function Customers() {
    return (
        <>
            <section className='width100'>
                <section className='width80 flex flex-col '>
                    <div className='Customers-up width80 flex justify-center gap-16'>

                        <div className='flex flex-col gap-8'>
                            <p className="bgcolor text-white p-1 w-32 text-center rounded-md">Our Testimonial</p>
                            <h1 className='text-3xl font-bold text-orange-500'>Our customers <br /> love what we do.</h1>
                        </div>

                        <div className='m-auto'>
                            <Image
                                src="/two.png"
                                alt=""
                                width={260}
                                height={90}
                                className=""
                            />
                        </div>

                        <div className='w-1/3 '>
                            <p className='pt-16'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some and form, by injected humor, or randomized words.</p>
                        </div>
                    </div>

                    <div className='Customers-down flex  width80 gap-10 pt-10 pb-10 justify-center'>
                        <div className='mask border rounded  text-center gap-10 flex p-2 bg-lime-600'>
                            <div className='maskk  text-center bg-white flex flex-col gap-5 p-6'>

                                <Image
                                    src="/green.png"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="m-auto"
                                />
                                <p className='text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
                                <div className='text-center flex flex-col gap-1'>
                                    <Image
                                        src="/mask1.png"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="m-auto"
                                    />
                                    <h1 className='font-bold'>Vilma Hawkins</h1>
                                    <p className='text-sm'>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='mask  border rounded text-center gap-10 flex p-2 bg-lime-50'>
                            <div className='maskk text-center  bg-white flex flex-col gap-5 p-6'>

                                <Image
                                    src="/black.png"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="m-auto"
                                />
                                <p className='text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
                                <div className='text-center flex flex-col gap-1'>
                                    <Image
                                        src="/mask2.png"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="m-auto"
                                    />
                                    <h1 className='font-bold'>Tonny Hensley</h1>
                                    <p className='text-sm'>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='mask border rounded  text-center gap-10 flex p-2 bg-lime-50'>
                            <div className='maskk text-center  bg-white flex flex-col gap-5 p-6'>

                                <Image
                                    src="/black.png"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="m-auto"
                                />
                                <p className='text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized.</p>
                                <div className='text-center flex flex-col gap-1'>
                                    <Image
                                        src="/mask3.png"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="m-auto"
                                    />
                                    <h1 className='font-bold'>Victoria Roach</h1>
                                    <p className='text-sm'>Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}