import { productsUp } from '@/app/data/Produ'
import React from 'react'
import Image from "next/image";
export default function RelatedProduct() {
    return (
        <>
            <section className='width100'>
                <section className='width80 flex flex-col justify-center pt-20 pb-20'>
                    <div className='text-xl font-bold flex flex-col gap-5 pb-10'>
                        <h1>Related Product</h1>
                        <hr className="border-b-2 border-lime-600 w-16" />
                    </div>
                    <div className="products-up flex justify-center gap-28 ">
                        {productsUp.map((product, index) => (
                            <div key={index} className="card border cursor-pointer border-spacing-3 text-center flex flex-col gap-3 hover:border-lime-500 relative">
                                <div className="bg-lime-50 m-1">
                                    <Image
                                        src={product.image}
                                        alt={product.alt}
                                        width={220}
                                        height={90}
                                    />
                                </div>
                                <h5 className="font-bold text-black-500">{product.title}</h5>
                                <p><span className="line-through">${product.originalPrice}</span> ${product.price}</p>
                                <Image
                                    src="/ratting.png"
                                    alt=""
                                    width={60}
                                    height={90}
                                    className="text-center m-auto pb-5"
                                />

                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}
