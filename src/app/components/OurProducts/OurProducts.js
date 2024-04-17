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
                        <div className="cat-down flex justify-between ">
                            {categories.map((category, index) => (
                                <div key={index} className="border  rounded cursor-pointer product hover:border-lime-500 bg-white border-spacing-4 p-5 text-center flex flex-col gap-2 gro relative group">
                                    <Image
                                        src={category.image}
                                        alt={category.alt}
                                        width={100}
                                        height={90}
                                    />
                                    <h5 className="font-bold">{category.title}</h5>
                                    <p>{category.products}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
