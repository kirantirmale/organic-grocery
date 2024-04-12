import React from 'react'
import Image from "next/image";
import { customers } from '../data/Custo';

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


                    <div className="Customers-down flex width80 gap-10 pt-10 pb-10 justify-center">
                        {customers.map((customer, index) => (
                            <div key={index} className="mask border cursor-pointer rounded text-center gap-10 flex p-2 transition-colors duration-300 hover:bg-lime-600">
                                <div className="maskk text-center bg-white flex flex-col gap-5 p-6">
                                    <Image
                                        src={customer.image}
                                        alt={customer.alt}
                                        width={50}
                                        height={50}
                                        className="m-auto"
                                    />
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
                    </div>;


                </section>
            </section>
        </>
    )
}
