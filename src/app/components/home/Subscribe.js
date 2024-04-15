import React from 'react'
import Image from "next/image";
export default function Subscribe() {
    return (
        <>
            <section className='width100 bg-orange-50'>
                <section className='width80'>
                    <div className='flex flex-col gap-5 pt-24 pb-24'>
                        <h1 className='text-4xl font-bold text-center'>
                            Subscribe to newsletter

                        </h1>
                        <p className='text-center'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            <br />
                            Lorem Ipsum has been the industry's standard dummy tex
                        </p>
                        <div class="flex flex-row gap-5 w-2/3 m-auto">
                            <input
                                type="text"
                                placeholder="Your Name"
                                class="border p-4 rounded-l-md flex-grow w-16"
                            />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                class="border p-4 rounded-r-md flex-grow"
                            />
                            <button
                                class="border p-4 rounded-md bgcolor text-white font-bold ml-2 "
                            >
                                Subscribe Now
                            </button>
                        </div>

                    </div>

                </section>
            </section>
        </>
    )
}
