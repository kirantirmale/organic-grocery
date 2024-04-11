import React from 'react'
import Image from "next/image";
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

                        <div className="cat-down flex  justify-between ">
                            <div className="border bg-white border-spacing-4 p-5 text-center flex flex-col gap-2 gro  hover:border-green-500">
                                <Image
                                    src="/grocery-1.png"
                                    alt=""
                                    width={100}
                                    height={90}

                                />
                                <h5 className="font-bold">Vegetable</h5>
                                <p>25+ Products</p>
                                <Image
                                    src="/aarow.png"
                                    alt=""
                                    width={30}
                                    height={90}
                                    className="-mb-9 ml-6"
                                />
                            </div>
                            <div className="border bg-white border-spacing-1 p-5 text-center flex flex-col gap-2 gro hover:border-green-500">
                                <Image
                                    src="/grocery-2.png"
                                    alt=""
                                    width={100}
                                    height={90}

                                />
                                <h5 className="font-bold">Fresh Fruits</h5>
                                <p>85+ Products</p>
                            </div>
                            <div className="border bg-white border-spacing-1 p-5 text-center flex flex-col gap-2 gro hover:border-green-500">
                                <Image
                                    src="/grocery-3.png"
                                    alt=""
                                    width={100}
                                    height={90}

                                />
                                <h5 className="font-bold">Beverages</h5>
                                <p>68+ Products</p>
                            </div>
                            <div className="border  bg-white border-spacing-1 p-5 text-center flex flex-col gap-2 gro hover:border-green-500">
                                <Image
                                    src="/grocery-4.png"
                                    alt=""
                                    width={100}
                                    height={90}

                                />
                                <h5 className="font-bold">Sea Food</h5>
                                <p>29+ Products</p>
                            </div>
                            <div className="border bg-white border-spacing-1 p-5 text-center flex flex-col gap-2 gro hover:border-green-500">
                                <Image
                                    src="/grocery-5.png"
                                    alt=""
                                    width={100}
                                    height={90}

                                />
                                <h5 className="font-bold"> Package Food</h5>
                                <p>68+ Products</p>
                            </div>
                            <div className="border bg-white border-spacing-1 p-5 text-center flex flex-col gap-2 gro hover:border-green-500">
                                <Image
                                    src="/grocery-6.png"
                                    alt=""
                                    width={100}
                                    height={90}

                                />
                                <h5 className="font-bold">Backery Items</h5>
                                <p>68+ Products</p>
                            </div>
                        </div>
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
