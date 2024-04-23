import React from 'react'
import Image from "next/image";
export default function App() {
    return (
        <>
            <section className='width-full md:width-80'>
                <section className='width-full md:width-80 flex flex-col md:flex-row justify-center'>
                    <div className='app width-full md:width-80 flex flex-col md:flex-row justify-center md:p-5 gap-6 md:gap-48 rounded-2xl'>
                        <div className='flex flex-col gap-6 md:align-middle md:mt-24 mo:m-auto'>
                            <p className='text-3xl md:text-4xl text-white line-clamp-3'>
                                Shopping for vegetables &  <br /> fruit is easier with <br />
                                <span className='font-bold'>TRoo Grocery App</span>
                            </p>
                            <p className='text-white text-xl md:text-2xl '>Available on Both Android and iOS</p>
                            <Image
                                src="/App.png"
                                alt=""
                                width={300}
                                height={90}
                                className=""
                            />
                        </div>
                        <div className='md:mt-0'>
                            <Image
                                src="/mobile.png"
                                alt=""
                                width={370}
                                height={250}
                                className=""
                            />
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}
