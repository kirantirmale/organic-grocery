import { categories } from '@/app/data/Cate'
import React from 'react'
import Image from "next/image";
export default function OurProducts() {
    return (
        <>
            <section className='width100'>
                <section className='width80 pt-20 pb-20'>
                    <div className=' flex flex-col gap-10'>
                        <div className='text-xl font-bold flex flex-col gap-2'>
                            <h1>Shop by categories</h1>
                            <hr className="border-b-2 border-lime-600 w-10" />
                        </div>
                        <div className="cat-down width80 justify-between grid grid-cols-1 md:grid-cols-3 gap-5 lg:grid-cols-6 ">
                            {categories.map((category, index) => (
                                <div key={index} className="border  cursor-pointer product bg-white border-spacing-4 p-5 text-center flex flex-col gap-5 gro relative group">
                                    <Image
                                        src={category.image}
                                        alt={category.alt}
                                        width={100}
                                        height={90}
                                        className="m-auto"
                                    />
                                    <h5 className="font-bold">{category.title}</h5>
                                    <p>{category.products}</p>
                                    <div className="absolute mo:top-48 mo:left-20  md:left-10    lg:top-48 right-0 lg:left-10 transform translate-x-2 -translate-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <Image
                                            src="/aarow.png"
                                            alt=""
                                            width={40}
                                            height={90}
                                            className=""
                                        />
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
