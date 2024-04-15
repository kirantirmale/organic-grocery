import React from 'react'
import Image from "next/image";
export default function AboutVegetables() {
    return (
        <>

            <section className='width100 veg flex flex-col justify-center'>
                <section className='vegatable flex justify-between '>
                    <div className="">
                        <Image
                            src="/grocery-delivery-illustration_1.png"
                            alt=""
                            width={400}
                            height={90}

                        />
                    </div>

                    <div className="flex flex-col align-middle text-center gap-6 m-auto">
                        <p className='text-white text-xl'>Awesome Products</p>
                        <h1 className="text-4xl font-bold text-white">Get Up to 15% Off Vegetables</h1>
                        <h5 className='text-white text-2xl'>We supply hight quality organic product</h5>
                        <div className="flex gap-4 m-auto">
                            <button className="btn4 p-3 rounded-md bg-white text-lime-500 font-bold w-28">Shop Now</button>
                            <button className="btn4 p-3 rounded-md border text-white w-28">Contact Us</button>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/grocery-delivery-illustration.png"
                            alt=""
                            width={400}
                            height={90}

                        />
                    </div>
                </section>
            </section>
        </>
    )
}
