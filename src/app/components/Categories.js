import React from 'react'
import Image from "next/image";
import { categories } from '../data/Cate';
export default function Categories() {
    return (
        <>
            <section className="width100 justify-center bg-lime-50 p-10">
                <div className="flex justify-center ">

                    <div className="tom">
                        <Image
                            src="/tomato.png"
                            alt=""
                            width={230}
                            height={90}
                            className="-ml-11"
                        />
                    </div>
                    <div className="categoris flex flex-col gap-16  ">
                        <div className="cat-up flex gap-20">
                            <div className="cat-left flex flex-col gap-5 w-2/4">
                                <p className="bgcolor   text-white p-1 w-48 text-center rounded-md">Hot Categories</p>
                                <h5 className="text-orange-600 font-bold text-3xl">
                                    Browse Our Categories
                                </h5>
                            </div>
                            <div className="cat-mid">
                                <Image
                                    src="/pat.png"
                                    alt=""
                                    width={130}
                                    height={90}
                                    className="-ml-11"
                                />
                            </div>
                            <div className="cat-rigth">
                                <p className="text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>

                        <div className="cat-down flex justify-between ">
                            {categories.map((category, index) => (
                                <div key={index} className="border cursor-pointer product bg-white border-spacing-4 p-5 text-center flex flex-col gap-2 gro relative group">
                                    <Image
                                        src={category.image}
                                        alt={category.alt}
                                        width={100}
                                        height={90}
                                    />
                                    <h5 className="font-bold">{category.title}</h5>
                                    <p>{category.products}</p>
                                    <div className="absolute top-48 right-0 left-10 transform translate-x-2 -translate-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
                        </div>;
                    </div>
                    <div className="flex flex-col  " >
                        <Image
                            src="/thaili.png"
                            alt=""
                            width={230}
                            height={90}
                            className="mt-60"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}
