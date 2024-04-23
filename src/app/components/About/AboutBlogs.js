import React from 'react'

import Image from "next/image";
import { Blogimages, blogs } from '../../data/Blog';
export default function AboutBlogs() {
    return (
        <>
            <section className='width100 flex  men'>
                <section className=' width80 flex flex-col justify-center gap-16 pb-10' >
                    <div className=' flex-col lg:flex-row pt-10 justify-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>

                        <div className='com flex-col lg:flex-row gap-5 justify-center lg:w-1/2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:mb-10 sm:m-auto'>
                            <p className="bgcolor text-white w-40 text-center rounded-md">Our Trusted Partner</p>
                            <h1 className='text-4xl text-orange-600 font-bold'>We have 523+ more <br /> trusted partners</h1>
                            <p>There are many variations of passages of Lorem <br /> Ipsum available, but the majority.</p>
                            <button className="btn4 p-3 rounded-md bg-orange-500 text-white w-40">Become a Partner</button>
                        </div>

                        <div className=' grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3  gap-2 lg:gap-14 mo:pt-5'>
                            {Blogimages.map((image, index) => (
                                <Image key={index} src={image} alt="img" width={170} height={75} />
                            ))}
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}
