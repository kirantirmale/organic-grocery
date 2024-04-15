import React from 'react'
import Image from "next/image";
export default function AboutApp() {
    return (
        <>
            <section className='width100'>
                <section className='width80 flex flex-col justify-center'>
                    <div className='app width80 flex  justify-center p-5 gap-48 rounded-2xl'>
                        <div className='flex flex-col gap-6 align-middle mt-24' >
                            <p className='text-3xl text-white line-clamp-3'>Shopping for vegetables &  <br /> fruit is easier with <br /> <span className='text-4xl font-bold'>TRoo Grocery App</span> </p>
                            <p className='text-white text-2xl'>Available on Both Android and ios</p>
                            <Image
                                src="/App.png"
                                alt=""
                                width={300}
                                height={90}
                                className=""
                            />
                        </div>
                        <div className=''>
                            <Image
                                src="/mobile.png"
                                alt=""
                                width={370}
                                height={90}
                                className=""
                            />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
