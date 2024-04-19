import React from 'react'
import Image from "next/image";
import { Blogimages, blogs } from '../../data/Blog';
import Link from 'next/link';
export default function Blogs() {
    return (
        <>
            <section className='width100 flex  men'>
                <section className=' width80 flex flex-col justify-center gap-16 pb-10' >
                    <div className=' flex flex-col gap-5'>
                        <p className="bgcolor text-white  w-40 m-auto text-center rounded-md">Latest News & Blogs</p>
                        <h1 className='text-4xl text-orange-600 font-bold text-center'>Most Popular News <br /> & Top Blogs</h1>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center blog'>

                        {blogs.map((blog, index) => (
                            <div key={index} className='p-3 cursor-pointer flex flex-col gap-2 border rounded-lg blog relative hover:border-orange-500 group'>

                                <Image
                                    src={blog.image}
                                    alt={blog.alt}
                                    width={360}
                                    height={200}
                                    className=""
                                />

                                <div className='p-3 flex flex-col gap-2'>
                                    <h1 className='text-lg font-bold'>{blog.title}</h1>
                                    <p className='text-sm text-slate-400'>{blog.description}</p>
                                    <hr />

                                    <div className='relative'>
                                        <Image
                                            src={blog.adminImage}
                                            alt=""
                                            width={220}
                                            height={90}
                                            className=""
                                        />

                                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:left-32 mo:left-16 mo:top-0">
                                            <Image
                                                src="/aarow.png"
                                                alt=""
                                                width={40}
                                                height={90}
                                                className=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>


                    <div className='m-auto'>
                        <Link href="" className="border border-orange-600 p-3 rounded-md bg-white text-orange-600 font-bold  m-auto">View All Blogs</Link>
                    </div>

                    <div className=' flex-col lg:flex-row pt-10 justify-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>

                        <div className='com flex-col lg:flex-row gap-5 justify-center lg:w-1/2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:mb-10 sm:m-auto'>
                            <p className="bgcolor text-white w-40 text-center rounded-md">Our Trusted Partner</p>
                            <h1 className='text-4xl text-orange-600 font-bold'>We have 523+ more <br /> trusted partners</h1>
                            <p>There are many variations of passages of Lorem <br /> Ipsum available, but the majority.</p>
                            <button className="btn4 p-3 rounded-md bg-orange-500 text-white w-40">Become a Partner</button>
                        </div>

                        <div className=' grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3  gap-2 lg:gap-14 '>
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
