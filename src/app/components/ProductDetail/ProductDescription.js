import React from 'react'
import Image from "next/image";
import Link from 'next/link';
export default function ProductDescription() {
    return (
        <>
            <section className='width100'>
                <section className='width80'>
                    <div className='flex flex-col '>

                        <div className='flex flex-col gap-5 p-5 bg-lime-50 rounded'>
                            <div className=' flex flex-row gap-5'>
                                <Link href='' className='active:text-lime-600  hover:text-lime-600 '>Description</Link>
                                <Link href='' className='active:text-lime-600 hover:text-lime-600 '>Review (1)</Link>
                                <Link href='' className='active:text-lime-600 hover:text-lime-600 '> Additional Information</Link>
                            </div>
                                <hr/>
                            <p>Lower temperature washes and delicate spin cycles are gentler on garment, helping to maintain the color, shape and structure of the fabric. At the same
                                time it reduces energy consumption that is used in care processes. are gentler on garment, helping to maintain the color.</p>
                            <div className='flex flex-row gap-5'>
                                <div className='flex flex-col gap-5'>
                                    <h1 className='text-lime-600 font-bold'>Benefits</h1>
                                    <div className='flex flex-col gap-5'>

                                        <div className='flex flex-row gap-2'>
                                            <Image
                                                src="/paytm.png"
                                                alt=""
                                                width={20}
                                                height={90}
                                                className=""
                                            />
                                            <p className=''>Emergency response time is one hour or less guaranteed.</p>
                                        </div>
                                        <div className='flex flex-row gap-2'>
                                            <Image
                                                src="/paytm.png"
                                                alt=""
                                                width={20}
                                                height={90}
                                                className=""
                                            />
                                            <p className=''>Until the eleifend elit is a lot of great facilities.</p>
                                        </div>
                                        <div className='flex flex-row gap-2'>
                                            <Image
                                                src="/paytm.png"
                                                alt=""
                                                width={20}
                                                height={90}
                                                className=""
                                            />
                                            <p className=''>Lorem Ipsum is simply dummy text</p>
                                        </div>


                                    </div>
                                </div>

                                <div className='flex flex-row gap-5'>
                                    <div className='flex flex-col gap-5 pt-11'>

                                        <div className='flex flex-row gap-2'>
                                            <Image
                                                src="/paytm.png"
                                                alt=""
                                                width={20}
                                                height={90}
                                                className=""
                                            />
                                            <p className=''>Emergency response time is one hour or less guaranteed.</p>
                                        </div>

                                        <div className='flex flex-row gap-2'>
                                            <Image
                                                src="/paytm.png"
                                                alt=""
                                                width={20}
                                                height={90}
                                                className=""
                                            />
                                            <p className=''>Until the eleifend elit is a lot of great facilities.</p>
                                        </div>

                                        <div className='flex flex-row gap-2'>
                                            <Image
                                                src="/paytm.png"
                                                alt=""
                                                width={20}
                                                height={90}
                                                className=""
                                            />
                                            <p className=''>Lorem Ipsum is simply dummy text</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        </>
    )
}
