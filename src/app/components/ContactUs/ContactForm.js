
import React from 'react'
import Image from "next/image";

export default function ContactForm() {
    return (
        <>
            <section className="w-full bg-orange-50 pt-20">
                <section className="width80">
                    <div className="flex flex-row  gap-52 ">
                        <div className="flex flex-col items-start gap-5">
                            <p className="bgcolor text-white p-1   text-center rounded-md  ">Leave A Message</p>
                            <h1 className='text-3xl font-bold text-orange-600'>Don’t hasitate to contact us
                                
                                if you need more help</h1>
                        </div>
                        <div className="flex  flex-col align-middle m-auto">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy abd text ever since. dummy text.</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}