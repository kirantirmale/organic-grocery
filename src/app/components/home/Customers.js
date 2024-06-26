import React from 'react'
import Image from "next/image";
import { customers } from '../../data/Custo';
import Link from "next/link";

export default function Customers() {
    return (
        <>
            <section className='width-full'>
                <section className='width80 flex flex-col'>

                    <div className='Customers-up width-full md:width-80 flex flex-col md:flex-row justify-center md:gap-16'>

                        <div className='flex flex-col gap-8 md:w-1/3 cum'>
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

                        <div className='w-full md:w-1/3'>
                            <p className='pt-8 md:pt-16 text-center md:text-left'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some and form, by injected humor, or randomized words.</p>
                        </div>
                    </div>

                    <div className="Customers-down flex flex-col md:flex-row width-full md:width-80 gap-10 md:pt-10 md:pb-10 justify-center ">
                        {customers.map((customer, index) => (
                            <div key={index} className="maskk border cursor-pointer rounded text-center gap-10 flex p-2 transition-colors duration-300 hover:bg-lime-600">
                                <div className="mask text-center bg-white flex flex-col gap-5 p-6">
                                    <div className='bg-black m-auto p-4 rounded-full Mask'>
                                        <Image
                                            src={customer.image}
                                            alt={customer.alt}
                                            width={25}
                                            height={30}
                                            className="m-auto"
                                        />
                                    </div>
                                    <p className="text-sm">{customer.text}</p>
                                    <div className="text-center flex flex-col gap-1">
                                        <Image
                                            src={customer.avatar}
                                            alt=""
                                            width={50}
                                            height={50}
                                            className="m-auto"
                                        />
                                        <h1 className="font-bold">{customer.name}</h1>
                                        <p className="text-sm">{customer.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Link href="/TestimonialPage" className="block px-4 py-2 tet rounded mb-4 text-center bg-orange-400 mx-auto md:mx-0 md:self-center">View More</Link>

                </section>
            </section>

        </>
    )
}
