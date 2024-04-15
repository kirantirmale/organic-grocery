import React from 'react'
import Image from "next/image";
import { items } from '../../data/Ship';
export default function AboutShipping() {
    return (
        <>
            <section className="w-full">
                <section className="w-full lg:w-4/5 mx-auto p-5 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 justify-center ">
                        {items.map((item, index) => (
                            <div key={index} className="flex border border-spacing-1 p-1 lg:w-1/2 xl:w-1/4">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={70}
                                    height={70}
                                    className=" -ml-10"
                                />
                                <div className="ml-2 lg:ml-4 ">
                                    <h5 className="text-sm lg:text-base font-bold pt-2">{item.title}</h5>
                                    <p className="text-black text-xs lg:text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}
